import { Component, OnInit } from '@angular/core';
import { Book, DataService } from '../data.service';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  formBuilder: FormBuilder = new FormBuilder();
  book : Book = new Book();
  constructor(private service: DataService, private router: Router) { }

  addBook() {
    this.book.isbn = this.addBookForm.controls.isbn.value;
    this.book.title = this.addBookForm.controls.title.value;
    this.book.price = this.addBookForm.controls.price.value;
    this.service.saveBook(this.book)
      .subscribe(_ => this.router.navigate(["/"]));
  }

  ngOnInit() {
    this.addBookForm = this.formBuilder.group({
      isbn: [""],
      title: [""],
      price: [""]
    });
  }

}
