import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {path: "", component: BookListComponent},
  {path: "edit-book/:isbn", component: EditBookComponent},
  {path: "add-book", component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
