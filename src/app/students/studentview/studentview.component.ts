import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {
  public name;
  public major;

  constructor(private actRoute: ActivatedRoute) { 
    this.name = this.actRoute.snapshot.params.name;
    this.major = this.actRoute.snapshot.params.major;
  }

  ngOnInit() {
  }

}
