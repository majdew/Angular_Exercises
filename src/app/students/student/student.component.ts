import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';
import { Material } from 'src/app/materials/material';
import { StudentService } from '../student.service';


@Component({
  selector: '[app-student]',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() private student : Student;
  @Output() private colorClickEvent : EventEmitter<String>= new EventEmitter();
  public materials : Material [];

  constructor(private studentService : StudentService) {
    console.log('constructor');
    
    
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.materials = this.studentService.getStudentMaterials(this.student);
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

  sendColorHeaderTitle() {
    this.colorClickEvent.emit(this.student.getColor());
  }

}
