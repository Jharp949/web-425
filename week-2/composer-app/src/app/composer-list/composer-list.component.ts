//Author: James Harper
//Title: composer-list.components.ts
//Date: 10/28/23
//Description: Typescript for displaying a list of composers

//Import component and oninit from angular
import { Component, OnInit } from '@angular/core';

//Define and export a composer class
export default class Composer{

  //Declare fullName and genre string variables
  fullName: string;
  genre: string;

  //Create a constructor to initialize fullName and genre
  constructor(fullName: string, genre: string){
    this.fullName = fullName;
    this.genre = genre;
  }
}

//Create and export a component for composer-list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  //Declare an array of composer objects as part of the component
  composers: Array<Composer>;

  //Fill the composers array with composer data
  constructor() {
    this.composers = [
      new Composer("Bedřich Smetana", "Romantic"),
      new Composer("Sergei Vasilyevich Rachmaninoff", "Romantic"),
      new Composer("Igor Stravinsky", "Modern"),
      new Composer("Ludwig Van Beethoven", "Classical"),
      new Composer("Hans Florian Zimmer", "Post Modern")
    ]
   }

  ngOnInit(): void {
  }

}
