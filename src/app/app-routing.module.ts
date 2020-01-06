import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentslistComponent } from './students/studentslist/studentslist.component';
import { MaterialslistComponent } from './materials/materialslist/materialslist.component';
import { MaterialviewComponent } from './materials/materialview/materialview.component';
import { StudentviewComponent } from './students/studentview/studentview.component';



const routes: Routes = [
  { path:'studentslist' , component: StudentslistComponent},
  { path:'materialslist' , component: MaterialslistComponent},
  { path: 'material/:title/:date' , component:MaterialviewComponent},
  { path:'student/:name/:major' , component:StudentviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
