import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  templateUrl: './ng-class-directive.component.html',
  styleUrls: ['./ng-class-directive.component.css']
})
export class NgClassDirectiveComponent {
  condition = false;
  cssClass = "myColor myFont";
  cssArray = ["myColor" , "myFont"];

  public obj = new myClass();
}
class myClass{
  myColor = true;
  myFont = true;
}