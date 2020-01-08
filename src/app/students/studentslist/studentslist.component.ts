import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
  public students  = [
    { name : 'ahmad', major: 'CS' , color:'#39ed3f'} ,
    { name : 'ali' , major: 'CE' , color:'#e0352f'}
  ];
  
  public fontcolor = "";
 

  constructor() {

  };

  ngOnInit() {
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  


}
