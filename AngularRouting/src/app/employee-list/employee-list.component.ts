import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

   selectedId : any;
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
constructor(private router : Router , private route : ActivatedRoute) {}

  EmpClick(employee : any){
    this.router.navigate(['/employees',employee.id]);
  }
  ngOnInit(){
    this.route.paramMap.subscribe((params : ParamMap)=>{
      let id = params.get('id');
      this.selectedId = id;
    })
  }
  isSelected(employee : any){
    return parseInt(employee.id) === parseInt(this.selectedId);
  }
}
