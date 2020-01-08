import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {
  private id:Number;
  private student:Student;

  constructor(private actRoute: ActivatedRoute , private studentService:StudentService) { 
    this.id = this.actRoute.snapshot.params.id;
    this.student = this.studentService.getStudentById(this.id);
  }

  ngOnInit() {
  }

}
