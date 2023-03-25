import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {

public condition = false;

myStyle = {
  'color':'red',
  'font-size':'50px'
}
}
