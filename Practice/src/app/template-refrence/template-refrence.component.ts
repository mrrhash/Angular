import { Component } from '@angular/core';

@Component({
  selector: 'app-template-refrence',
  templateUrl: './template-refrence.component.html',
  styleUrls: ['./template-refrence.component.css']
})
export class TemplateRefrenceComponent {

display_Name = "";

public getName(fname:string , lname:string){
  this.display_Name = fname + " " + lname;
}

// public getName(value:any){
//   this.display_Name = value;
//   console.log(value);
// }

// getHeading(value:any){
//   console.log(value);
// }

// public getName(value:string){
//   this.display_Name = value;
// }


//  public getName(value:string){
//     console.log(value);
//   }
}
