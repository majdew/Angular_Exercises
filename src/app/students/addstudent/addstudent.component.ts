import { Component, OnInit , EventEmitter , Output } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  private profileForm = new FormGroup({
    name : new FormControl(null, [Validators.required ,Validators.minLength(4)]),
    major : new FormControl(null,[Validators.required]),
    color : new FormControl('')

  });
  private student :Student;
  @Output()  private newStudentEvent :EventEmitter <Student> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveStudent(){
    if(!this.profileForm.invalid){
    let name = this.profileForm.value.name;
    let major = this.profileForm.value.major;
    let color = this.profileForm.value.color;
    this.student= new Student(name , major , color);
    this.newStudentEvent.emit(this.student);
    }
    this.profileForm.reset();
  }

}
