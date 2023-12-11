// Author: James Harper
// Title: base-layout.component.ts
// Date: 12/02/23
// Description: Typescript for home component

// Import Component, oninit, and the transcript interface
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;;

   // Create a transcript form variable of type form group
   transcriptForm: FormGroup;

   // Declare a blank constructor with the form builder passed in
  constructor(private fb: FormBuilder) {
    this.transcriptEntry = {} as ITranscript;
  }
  // On init, call the form builder variable and set up its validators
  ngOnInit(): void {
    this.transcriptForm = this.fb.group({ course: ['', Validators.required ], grade: ['', Validators.required]});
  }

   // Call get and return the form controls
   get form(){return this.transcriptForm.controls}
  // Create a function for storing transcript entries
  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });
    // Reset the form
    event.currentTarget.reset();
  }

  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch(entry.grade) {
        case 'A':
          console.log('its an a')
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }

    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
