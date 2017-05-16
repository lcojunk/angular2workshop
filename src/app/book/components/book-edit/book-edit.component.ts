import { Component, OnInit, Input } from '@angular/core';
import { Book } from "app/book/components/shared/book";
import { BookDataService } from "app/book/components/shared/book-data.service";
import { ActivatedRoute } from "@angular/router";

const bookMock=  {
    "title": "Design Patterns",
    "subtitle": "Elements of Reusable Object-Oriented Software",
    "isbn": "978-0-20163-361-0",
    "abstract": "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.",
    "numPages": 395,
    "author": "Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides",
    "publisher": {
      "name": "Addison-Wesley",
      "url": "http://www.addison-wesley.de/"
    }
  }

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookData:BookDataService) { }

  @Input() book:Book;
  isbn:string;
  error:string;
  message:string;
  ngOnInit() {
   // this.book=bookMock;
    this.route.params.subscribe((params)=>{     
      this.isbn=params.isbn;
       console.log(this.isbn);
      if(this.isbn){
        this.bookData.getBook(this.isbn).subscribe(
          successFn=>{
            this.book=successFn;
            this.message='loaded'
          },
          errorFn=>this.error=errorFn
        );
      }
      
    })    
  }

  public save():void{
    this.message='saved';
    this.error=null;
    console.log(this.book);
  }
  public saveBook(abook:Book){
        this.message='saved';
    this.error=null;
    console.log(abook);
  }

}
