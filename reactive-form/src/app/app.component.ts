import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';

  signUpForm = new FormGroup({
    name : new FormControl(''),
    age : new FormControl(''),
    email : new FormControl(''),
  });
  formHandler(){
    console.log(this.signUpForm.value);
  }
}