import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  private student ={
    name : "default",
    major : "default"
  }
  private nmae = new FormControl('majd');
  private profileForm = new FormGroup({
    name : new FormControl(''),
    major : new FormControl('')

  });
  constructor() { }

  ngOnInit() {
  }
  saveStudent(){
    this.student = this.profileForm.value;
  }

}
