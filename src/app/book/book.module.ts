import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from "app/book/components/book-list/book-list.component";
import { BookDetailComponent } from "app/book/components/book-detail/book-detail.component";
import { BookDataService } from "app/book/components/shared/book-data.service";
import { ConfirmCandeactivateGuard } from "app/book/components/shared/confirm-candeactivate.guard";
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookAddComponent } from './components/book-add/book-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookRoutingModule
  ],
    providers: [BookDataService,ConfirmCandeactivateGuard],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookAddComponent
  ]
    
})
export class BookModule { }
