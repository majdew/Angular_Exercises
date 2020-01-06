import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materialview',
  templateUrl: './materialview.component.html',
  styleUrls: ['./materialview.component.css']
})
export class MaterialviewComponent implements OnInit {
  public title;
  public date;

  constructor(private actRoute: ActivatedRoute) { 
    this.title = this.actRoute.snapshot.params.title;
    this.date = this.actRoute.snapshot.params.date;
  }

  ngOnInit() {
  }

}
