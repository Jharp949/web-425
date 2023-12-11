/**
 * Title: book-list.component.ts
 * Author: James Harper
 * Date: 12 December 2023
 * Description: Book list component (book list page)
 */

// Imports
import { Component, OnInit } from '@angular/core';
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
  books: Array<IBook> = [];
//Create a book variable of type IBook
  book: IBook;
// Constructor that fills the book array the requested file
  constructor(private booksService: BooksService, private dialog: MatDialog) {

    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }


          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
  }

  ngOnInit(): void { }
// Function for outputting book information based on the provided isbn number
  showBookDetails(isbn: string) {
// Assigns book object to equal the selected book
    this.book = this.books.find(book => book.isbn === isbn);
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
