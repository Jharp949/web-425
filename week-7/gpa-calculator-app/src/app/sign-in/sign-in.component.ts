// Author: James Harper
// Title: sign-in.component.ts
// Date: 12/03/23
// Description: Typescript for sign-in component

//Import angular modules
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

// Create and export the sign-in component
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  // Create variables for the sign-in form and error message
  signinForm: FormGroup;
  errorMessage: string;

  // Constructor for router, cookie service, form builder, and sign-in service
  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {}

  // Default state of the form
  ngOnInit(): void {
    // Student id field to accept the required number value
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  // Get function to return the form controls
  get form() { return this.signinForm.controls; }

  // sign-in submission function
  onSubmit(){
    // Variables for formValues and student ID
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId)

    // If sign-in matches student ID
    if(this.signinService.validate(studentId)){
      // Set session cookies for the user
      this.cookieService.set('session_user', studentId.toString(), 1)

      // Navigate to the default route
      this.router.navigate(['/'])
    } else {
      // If sign-in does not match student ID
      this.errorMessage = "The student ID you have entered was invalid. Please try again"
    }
  }
}
