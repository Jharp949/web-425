/**
 * Title: book.interface.ts
 * Author: James Harper
 * Date: 12 December 2023
 * Description: Book interface
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
