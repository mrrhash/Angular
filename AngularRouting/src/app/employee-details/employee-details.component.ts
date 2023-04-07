import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
 EmpID :any;
 EmpName :any;
  /**
   *
   */
  constructor(private route : ActivatedRoute , private router : Router) {}

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.EmpID = id;    // snapshot drawback
    this.route.paramMap.subscribe((params : ParamMap)=>{
      let id = params.get('id');
      this.EmpID = id;
    })
  }

  PreviousEmp(){
    let previousId = parseInt(this.EmpID) - 1;
    this.router.navigate(['employees',previousId]);
  }
  NextEmp(){
    let nextId = parseInt(this.EmpID) + 1;
    this.router.navigate(['employees',nextId]);
  }
}
