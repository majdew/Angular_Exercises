import { Component, OnInit , EventEmitter , Output } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';

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

  @Output()  private newstudentEvent :EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  saveStudent(){
    this.newstudentEvent.emit(this.profileForm.value);
  }


}
