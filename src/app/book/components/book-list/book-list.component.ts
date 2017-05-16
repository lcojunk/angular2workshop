import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from "app/book/components/shared/book";
import { BookDataService } from "app/book/components/shared/book-data.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BookListComponent implements OnInit {

  constructor(private bookdata:BookDataService) { }

  private books:Book[]=[];
  public successmessage:string;
  public error:string;

  public booksObservable:Observable<Book[]>;

  ngOnInit() {
    this.booksObservable = this.bookdata.getBooks();
    this.bookdata.getBooks().subscribe(
      successFn=>{
        this.books=successFn
        this.successmessage="Loaded "+successFn.length+" books";
        this.error=null;
      },
      errorFn=>{
        this.books=[];
        this.successmessage=null;
        this.error="Error getting books";
      }
    );
  }

  public allBooks():Book[]{
    return this.books;
  }
}
