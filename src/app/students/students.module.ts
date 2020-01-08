import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { StudentComponent } from './student/student.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { AppRoutingModule } from '../app-routing.module';
import { ExponentPipe } from './exponent.pipe';
import { AddstudentComponent } from './addstudent/addstudent.component';




@NgModule({
  declarations: [StudentslistComponent, StudentComponent, StudentviewComponent, ExponentPipe, AddstudentComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    StudentComponent,
    StudentslistComponent,
    StudentviewComponent
  ]
})
export class StudentsModule { }
