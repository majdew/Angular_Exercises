import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  @Input() public title;
  @Input() public date;

  constructor() { }

  ngOnInit() {
  }

}
