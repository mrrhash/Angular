import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgClassDirectiveComponent } from './ng-class-directive/ng-class-directive.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TemplateRefrenceComponent } from './template-refrence/template-refrence.component';
import { CounterComponent } from './counter/counter.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructureDirectrivesComponent } from './structure-directrives/structure-directrives.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { PipeComponent } from './pipe/pipe.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { CustomPipe } from './custom-pipes/custom.pipe';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    NgClassDirectiveComponent,
    StyleBindingComponent,
    TemplateRefrenceComponent,
    CounterComponent,
    TwoWayBindingComponent,
    StructureDirectrivesComponent,
    ChildComponent,
    Child2Component,
    PipeComponent,
    DatePipeComponent,
    CustomPipe,
    StudentListComponent,
    StudentDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
