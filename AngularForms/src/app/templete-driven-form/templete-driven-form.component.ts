import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css']
})
export class TempleteDrivenFormComponent {

  std = new Student();
  selectedHobbies: string[]=[];

  onChange(e:any){
    //console.log(e)
    //console.log(e.target.value,e.target.checked);
   let selectedValue = e.target.value;
   let checked = e.target.checked;
   if(checked){
     this.selectedHobbies.push(selectedValue);
   }
   else{
     let index = this.selectedHobbies.indexOf(selectedValue);
     this.selectedHobbies.splice(index, 1);
   }

  }
  constructor() {
    this.std.country="";

  }

save(formData:any){
// console.log(formData);
//console.log(formData.value);
// const std = new Student(formData.name, formData.age, formData.email);
// console.log(std);
console.log(this.std);
console.log(this.selectedHobbies);
}
}
