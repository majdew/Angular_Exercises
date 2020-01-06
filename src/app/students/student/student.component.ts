import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() public name;
  @Input() public major;
  @Input('color') public divcolor;
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  public color;


  constructor() { 
    this.color = this.divcolor;
  }

  ngOnInit() {
  }

  sendEvent() {
    this.childEvent.emit('red');

  }

}
