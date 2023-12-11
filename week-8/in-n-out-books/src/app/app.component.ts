/**
 * Title: app.component.ts
 * Author: James Harper
 * Date: 12 December 2023
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books'
  }

}
