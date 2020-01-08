import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  public materials  = [
    { id: 1 , title : 'Java', date: '1/2/2020'} ,
    { id: 2 ,title : 'Android' , date: '3/5/2020'}
  ];

  constructor() { 

  }


}
