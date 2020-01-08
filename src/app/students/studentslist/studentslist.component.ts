import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
  private students : Student [];
  private fontcolor : String = "";
 
  constructor( private studentService : StudentService) {
    this.students = this.studentService.getStudents();
  };

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }

  insertStudentIntoList(student){
    this.studentService.insertStudentIntoServiceList(student);
  }
}
