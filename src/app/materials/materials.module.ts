import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialslistComponent } from './materialslist/materialslist.component';
import { MaterialComponent } from './material/material.component';
import { MaterialviewComponent } from './materialview/materialview.component';



@NgModule({
  declarations: [MaterialslistComponent, MaterialComponent, MaterialviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialslistComponent,
    MaterialviewComponent,
    MaterialComponent
  ]
})
export class MaterialsModule { }
