import { Component, OnInit } from '@angular/core';
import {MaterialService} from '../material.service'

@Component({
  selector: 'app-materialslist',
  templateUrl: './materialslist.component.html',
  styleUrls: ['./materialslist.component.css']
})
export class MaterialslistComponent implements OnInit {
   public materials ;


  constructor(private materialService : MaterialService) { 
    this.getMaterials();

  }

  ngOnInit() {
  }
  getMaterials() : void {
    this.materials = this.materialService.materials ;
      
  }

}
