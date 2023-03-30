import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
    quote = "Never Give Up!";
    name = "hassan raza";
    obj = {
      name: "hassan raza",
      age : 20,
      isMarried : false,
    }
}
