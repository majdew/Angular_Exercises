import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students : Student[] = [
    new Student ( 'ahmed' , 'CS' , 'red') ,
    new Student('ali' , 'CE' , 'green')
  ];

  constructor() { }

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
}
