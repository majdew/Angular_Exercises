import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentslistComponent } from './students/studentslist/studentslist.component';
import { MaterialslistComponent } from './materials/materialslist/materialslist.component';
import { MaterialviewComponent } from './materials/materialview/materialview.component';



const routes: Routes = [
  {path:'studentslist' , component: StudentslistComponent},
  { path:'materialslist' , component: MaterialslistComponent},
  {
    path: 'material' , component:MaterialviewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
