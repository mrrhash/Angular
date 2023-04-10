import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-templete',
  templateUrl: './ng-templete.component.html',
  styleUrls: ['./ng-templete.component.css']
})
export class NgTempleteComponent {
 public myVar = false;

 public Course = 'Javascript';

 public array =[
   {name:'hassan',age:22,gender:'male'},
   {name:'hassan',age:22,gender:'male'},
   {name:'hassan',age:22,gender:'male'},

 ]
}
