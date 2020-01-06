import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() public student;
  @Output() public childEvent : EventEmitter<any>= new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  sendEvent() {
    this.childEvent.emit(this.student.color);
  }

}
