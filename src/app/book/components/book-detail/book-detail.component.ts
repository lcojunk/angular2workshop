import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from "@angular/router/public_api";
import { ActivatedRoute } from "@angular/router";
import { Book } from "app/book/components/shared/book";
import { BookDataService } from "app/book/components/shared/book-data.service";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  isbn:string;
  book:Book;
  error:string;

  constructor(private route: ActivatedRoute, private bookData:BookDataService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.isbn=params.isbn;
      if(this.isbn){
        this.bookData.getBook(this.isbn).subscribe(
          successFn=>this.book=successFn,
          errorFn=>this.error=errorFn
        );
      }
      
    })
  }

}
