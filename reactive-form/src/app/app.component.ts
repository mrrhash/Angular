import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  hobbiesArray : string[] = ['Reading','Writing','Dancing','Singing'];

  signUpForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    age : new FormControl('',[Validators.required,Validators.min(10),Validators.max(50)]),
    email : new FormControl('',[Validators.required,Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]),
    pass : new FormControl('',[Validators.required,Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),
    gender : new FormControl('',[Validators.required]),
    country : new FormControl('',[Validators.required]),
    accept : new FormControl(false,[Validators.requiredTrue]),
    hobbies : new FormArray([],Validators.required),
  });

  onChange(e:any){
    console.log(e.target.value,e.target.checked);
   let checked = e.target.checked;
   let checkedValue = e.target.value;

   let checkedArray = this.signUpForm.get('hobbies') as FormArray;

   if(checked){
     checkedArray.push(new FormControl(checkedValue));
   }
   else{
     let i : number = 0;
     checkedArray.controls.forEach((item)=>{
       if(item.value === checkedValue){
         checkedArray.removeAt(i);
       }
       i++;
     })
   }
  }

  formHandler(){
    console.log(this.signUpForm.value);
    this.signUpForm.reset();

  }
  get form(){
    return this.signUpForm.controls;
  }
}
