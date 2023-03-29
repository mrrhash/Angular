import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

@Output() public childEvent = new EventEmitter();

myEvent(){
  this.childEvent.emit("Never Give Up");
}
}
