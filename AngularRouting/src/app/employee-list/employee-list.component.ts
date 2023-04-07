import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  myEmployees = [
    {id : 0 , name : 'Hassan'},
    {id : 1 , name : 'Ahsan'},
    {id : 2 , name : 'Bilal'},
    {id : 3 , name : 'Abid'},
    {id : 4 , name : 'Ali'},
  ]

/**
 *
 */
constructor(private router : Router) {}

  EmpClick(employee : any){
    this.router.navigate(['/employees',employee.id]);
  }

}
