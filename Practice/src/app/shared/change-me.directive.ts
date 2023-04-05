import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeMe]'
})
export class ChangeMeDirective {

  @Input() myColor = '';
  @Input() bgColor = '';

  constructor(private element:ElementRef) {
    //this.element.nativeElement.style.color="red";
    //this.element.nativeElement.style.backgroundColor="yellow";
   // this.element.nativeElement.innerHTML="Hello World";
   }

   ngOnInit(){
    this.element.nativeElement.style.color=this.myColor ;
    this.element.nativeElement.style.backgroundColor=this.bgColor;

   }

}
