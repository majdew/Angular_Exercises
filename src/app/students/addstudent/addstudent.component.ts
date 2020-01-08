import { Component, OnInit , EventEmitter , Output } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  private profileForm = new FormGroup({
    name : new FormControl(''),
    major : new FormControl(''),
    color : new FormControl('')

  });
  private student :Student;
  @Output()  private newStudentEvent :EventEmitter <Student> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveStudent(){
    let name = this.profileForm.value.name;
    let major = this.profileForm.value.major;
    let color = this.profileForm.value.color;
    this.student= new Student(name , major , color);
    this.newStudentEvent.emit(this.student);
    this.profileForm.reset();
  }

}
