import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number> = [];

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012]
  }
  //Create a function for log-in validation
  validate(studentId: number){
    //Return true/false depending on whether or not the provided parameter ID is present in the student ID array
    return this.studentIds.some(id => id === studentId)
   }
}
