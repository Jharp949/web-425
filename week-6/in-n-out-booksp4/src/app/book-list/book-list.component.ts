// Author: James Harper
// Title: book-list.components.ts
// Date: 11/19/23
// Description: Typescript Component for displaying a list of books

// Imports
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

//Create and export book list component
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
// Observable array of IBooks
  books: Observable<IBook[]>;
// Header for the book data values
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
//Create a book variable of type IBook
  book: IBook;
// Constructor that fills the book array with getBooks()
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();

  }

  ngOnInit(): void {
  }
// Function for outputting book information based on the provided isbn number
  showBookDetails(isbn: string) {
// Assigns book object to equal the selected book
    this.book = this.booksService.getBook(isbn);
// Create a dialog ref object with a book value set to match the current book
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      // Set disableClose to true, and the width to 800px
      disableClose: true,
      width: '800px'
    })
// Console output of the book data
    console.log(this.book);
// Upon closing the dialog box, book is null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
