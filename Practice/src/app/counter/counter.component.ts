import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
public value : number = 0;

Counter(str : string){
  (str === "add") ? this.value++ : this.value-- ;
}

}
