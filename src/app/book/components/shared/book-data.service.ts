import { Injectable } from '@angular/core';
import { Book } from "./book";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class BookDataService {

  private allBooksUrl:string='http://localhost:4730/books';
  private mockAllBooksUrl:string='/assets/allbooks.json';
  private   books:Book[] = [];

  myObserver;
  constructor(private http:Http) { }

  public getBooks():Observable<Book[]>{
    return this.http.get(this.allBooksUrl)
      .map(response => response.json());
//    return Observable.of(this.books);
  }

  public getBook(isbn:string):Observable<Book>{
      return this.http.get(this.allBooksUrl+"/"+isbn)
      .map(response => response.json());  
  }



  public createBook(book:Book):Observable<Book>{
    return this.http.post(this.allBooksUrl, book)
    .map(response=>response.json());
  }
  
  ping(){
    this.myObserver.next('foo')
  }

  public loadBooks():Observable<Book[]>{
    let observable = new Observable(observer => {
      this.myObserver = observer;
      // this.http.get(this.allBooksUrl).subscribe(
      //   successFn=>observer.next(successFn),
      //   errorFn=>observer.error(errorFn)
      // );
/*
    randomAsyncCall((err, value) =>
    if (err) {
    observer.error(err);
    } else {
    observer.next(value);
    observer.complete();
    }
  });
  */
});
  
  return observable;
  }

}
