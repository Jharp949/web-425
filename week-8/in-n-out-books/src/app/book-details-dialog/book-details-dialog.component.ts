/**
 * Title: book-details-dialog.component
 * Author: James Harper
 * Date: 12 December 2023
 * Description: Book details dialog (dialog box for displaying the details of a book)
 */

// Import IBook, component, material dialog reference and data, and inject
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

//Create and export a book details dialog component
@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {
//Create a book variable of type IBook
  book: IBook;
//Constructor with dialog ref and data parameters
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
//Set the book variable to equal the current book data
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
