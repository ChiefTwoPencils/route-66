import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: Book;

  constructor(private service: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  updateBook() {
    this.service.saveBook(this.book)
      .subscribe(_ => this.router.navigate(["/"]));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        let id = params["isbn"];
        this.service.getBook(id).subscribe(book => this.book = book);
    });  
  }
}
