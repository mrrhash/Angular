import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { TrousersComponent } from './trousers/trousers.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesDetails2Component } from './courses-details2/courses-details2.component';

const routes: Routes = [
  //{path:'', component: HomeComponent},// not a good practice
  //{path:'',redirectTo:'/home', pathMatch:'prefix'},//prefix means just start of the route shohld be empty
  {path:'',redirectTo:'/home', pathMatch:'full'},//full means whole route shohld be empty
  {path:'home', component: HomeComponent},
  {
    path:'products',
    component: ProductsComponent,
    children:[
      {path:'tshirts' , component: TshirtsComponent},
      {path:'trousers' , component: TrousersComponent},
    ]
  },
  {path:'about', component: AboutComponent},
  {path:'courses', component: CoursesComponent},
  {
    path:'courseDetails',
    outlet:'course_details',
    component:CoursesDetailsComponent
  },
  {
    path:'courseDetails2',
    outlet:'course_details2',
    component:CoursesDetails2Component
  },
  {path:'contact', component: ContactComponent},
  {path:'employees', component: EmployeeListComponent},
  {path:'employees/:id', component: EmployeeDetailsComponent},
  //{path:'employees/:id/:name', component: EmployeeDetailsComponent},
  {path:"**" , component: PageNotFoundComponent}//it must be in the end of the route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
