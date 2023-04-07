import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //{path:'', component: HomeComponent},// not a good practice
  //{path:'',redirectTo:'/home', pathMatch:'prefix'},//prefix means just start of the route shohld be empty
  {path:'',redirectTo:'/home', pathMatch:'full'},//full means when whole route shohld is empty
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'employees', component: EmployeeListComponent},
  //{path:'employees/:id', component: EmployeeDetailsComponent},
  {path:'employees/:id/:name', component: EmployeeDetailsComponent},
  {path:"**" , component: PageNotFoundComponent}//it must be in the end of the route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
