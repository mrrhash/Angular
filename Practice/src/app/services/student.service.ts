import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  public getData(){
    return[
      { name: "hassan",age:20,standard:10 },
      { name: "ali",age:34,standard:12 },
      { name: "usama",age:21,standard:11 }
    ]
  }
}
