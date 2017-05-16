import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from "app/book/components/book/book.component";
import { BookListComponent } from "app/book/components/book-list/book-list.component";
import { BookDetailComponent } from "app/book/components/book-detail/book-detail.component";
import { ConfirmCandeactivateGuard } from "app/book/components/shared/confirm-candeactivate.guard";
import { BookEditComponent } from "app/book/components/book-edit/book-edit.component";
import { BookAddComponent } from "app/book/components/book-add/book-add.component";

const routes: Routes = [{
  path: '',
  component: BookComponent,
  children: [
    { path: '', component: BookListComponent, canDeactivate:[ConfirmCandeactivateGuard]},
    { path: 'add', component: BookAddComponent }, //should be over :isbn!!!
    { path: ':isbn', component: BookDetailComponent },
    { path: ':isbn/edit', component: BookEditComponent },
    { path: '**',  redirectTo: '/books'/* redirect to default */ //component: BookListComponent /* page not found component */
    }    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
