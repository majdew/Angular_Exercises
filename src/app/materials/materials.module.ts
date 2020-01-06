import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialslistComponent } from './materialslist/materialslist.component';
import { MaterialComponent } from './material/material.component';
import { MaterialviewComponent } from './materialview/materialview.component';
import { AppRoutingModule } from './../app-routing.module';



@NgModule({
  declarations: [MaterialslistComponent, MaterialComponent, MaterialviewComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MaterialslistComponent,
    MaterialviewComponent,
    MaterialComponent
  ]
})
export class MaterialsModule { }
