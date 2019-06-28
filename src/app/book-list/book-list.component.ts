import { Component, OnInit } from '@angular/core';
import { DataService, Book} from "../data.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private service: DataService) { }

  deleteBook(book : Book) {
    if (!window.confirm("Are you sure you want to delete this book?")) {
      return;
    }
    this.service.deleteBook(book.isbn).subscribe(
      _ => this.books = this.books.filter(b => book.isbn != b.isbn)
    );
  }

  ngOnInit() {
    this.service.getBooks()
      .subscribe(books => this.books = books);
  }
}
