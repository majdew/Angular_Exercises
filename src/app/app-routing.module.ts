import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentslistComponent } from './students/studentslist/studentslist.component';
import { MaterialslistComponent } from './materials/materialslist/materialslist.component';
import { MaterialviewComponent } from './materials/materialview/materialview.component';
import { StudentviewComponent } from './students/studentview/studentview.component';
import { AddstudentComponent } from './students/addstudent/addstudent.component';



const routes: Routes = [
  { path:'studentslist' , component: StudentslistComponent},
  { path:'materialslist' , component: MaterialslistComponent},
  { path: 'material/:id' , component:MaterialviewComponent},
  { path:'student/:id' , component:StudentviewComponent},
  { path:'addstudent' , component:AddstudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
