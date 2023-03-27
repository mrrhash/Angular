import { Component } from '@angular/core';

@Component({
  selector: 'app-structure-directrives',
  templateUrl: './structure-directrives.component.html',
  styleUrls: ['./structure-directrives.component.css']
})
export class StructureDirectrivesComponent {
  // display = true;

  // display2 = "hassan";

  // pizza = "fajita";

  //public cars = ["Corolla", "City","land cruisor " , "Alto"]

  //  public persons = [
  //    { name: "Ali" , age:"21" , isMarried:false},
  //    { name: "Usman" , age:"54" , isMarried:true},
  //    { name: "Arshad" , age:"34" , isMarried:true}

  //  ]
  public persons = [
    { name: "Ali" , age:"21" , isMarried:false,hobbies:["writing","singing","dancing"]},
    { name: "Usman" , age:"54" , isMarried:true,hobbies:["songs","singing","dancing"]},
    { name: "Arshad" , age:"34" , isMarried:true,hobbies:["writing","sports","dancing"]}

  ]
}
