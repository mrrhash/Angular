import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, num : number): unknown {
    return value * num;

  }
  // transform(value: number, ...args: number[]): unknown {
    //single parameter
  //   // const [a] = args ;
  //   // return Math.pow(value,a);

    //Double parameter
  //   //const [a,b] = args ;
  //   //return value * a * b ;

  //   //return value + 2;
  //   //return value + 10;
  //   //return value * value;
  //   //return value * value * value;

  // }

}
