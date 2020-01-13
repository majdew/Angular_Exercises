import { Injectable } from '@angular/core';
import { Student } from './student';
import { Material } from '../materials/material';
import { MaterialService } from '../materials/material.service';

@Injectable()
export class StudentService {
  private students : Student[] = [
    new Student ( 'ahmed' , 'CS' , 'red' ,[1 ]) ,
    new Student('ali' , 'CE' , 'green' , [2 ])
  ];


  constructor(private materialService : MaterialService) {

   }

  getStudents() : Student[]{
    return this.students;
  }

  getStudentById(id:Number){
    for(let i = 0 ; i<this.students.length ; i++){
      if(this.students[i].checkStudentlById(id))
        return this.students[i];  
    }
    return null;
  }

  insertStudentIntoServiceList(student:Student):void {
    this.students.push(student);
  }
  getStudentMaterials(student : Student) : Material[]{
    let materials : Material[] = [];
    let materialsId : number [] = student.getMaterialIdArray() ;
    for (let i =0 ; i<materialsId.length ; i++){
      let material : Material = this.materialService.getMaterialById(materialsId[i]);
      materials.push (material);

    }
    return materials;
  }
}
