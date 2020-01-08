import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: '[app-student]',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() public student;
  @Output() public childEvent : EventEmitter<any>= new EventEmitter();

  constructor() {
    console.log('constructor');

  }
  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');


  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');


  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }


  sendEvent() {
    this.childEvent.emit(this.student.color);
  }

}
