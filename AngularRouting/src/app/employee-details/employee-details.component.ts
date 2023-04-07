import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route : ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let name = this.route.snapshot.paramMap.get('name');
    this.EmpID = id;
    this.EmpName = name;
  }
}
