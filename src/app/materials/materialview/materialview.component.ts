import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../material.service';
import {Material } from '../material'

@Component({
  selector: 'app-materialview',
  templateUrl: './materialview.component.html',
  styleUrls: ['./materialview.component.css']
})
export class MaterialviewComponent implements OnInit {
  private title;
  private date;
  private id ;
  private materials : Material [];
  private material : Material;

  constructor(private actRoute: ActivatedRoute , private materialService : MaterialService) {
    this.title = this.actRoute.snapshot.params.title;
    this.date = this.actRoute.snapshot.params.date;
    this .materials = this.materialService.materials;
  }

  ngOnInit() {
  }






  

}
