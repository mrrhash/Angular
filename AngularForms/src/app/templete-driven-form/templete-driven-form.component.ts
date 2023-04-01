import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css']
})
export class TempleteDrivenFormComponent {

  std = new Student("Ali",22,"ali123@gmail.com");

save(formData:any){
// console.log(formData);
//console.log(formData.value);
// const std = new Student(formData.name, formData.age, formData.email);
// console.log(std);
console.log(this.std);
}
}
