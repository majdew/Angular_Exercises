import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialslist',
  templateUrl: './materialslist.component.html',
  styleUrls: ['./materialslist.component.css']
})
export class MaterialslistComponent implements OnInit {
  public materials  = [
    { title : 'Java', date: '1/2/2020'} ,
    { title : 'Android' , date: '3/5/2020'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
