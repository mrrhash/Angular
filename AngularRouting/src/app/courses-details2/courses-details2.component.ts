import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-details2',
  templateUrl: './courses-details2.component.html',
  styleUrls: ['./courses-details2.component.css']
})
export class CoursesDetails2Component {

  /**
   *
   */
  constructor( private router : Router ) {}

  close(){
    this.router.navigate([{ outlets : {course_details:null , course_details2:null} }])
  }
}
