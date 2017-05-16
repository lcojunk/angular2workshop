import { Component, OnInit, Input } from '@angular/core';
import { Book } from "app/book/components/shared/book";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BookDataService } from "app/book/components/shared/book-data.service";

@Component({
  selector: 'book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private bookdata:BookDataService) {

   }

  @Input() book:Book;
  isbn:string;
  error:string;
  message:string;
  form: FormGroup;
  ngOnInit() {
        this.createForm();
  }


  private createEmptyBook():Book{
    return {
      title: null,
      subtitle: "",
      isbn: "",
      abstract: "",
      numPages: 0,
      author: "",
      publisher: {
            name:"",
            url:""
      }      
    }
  }
  

  private createForm():void{
    this.book=this.createEmptyBook();
    
    this.form = this.formbuilder.group({
      title: [this.book.title, Validators.required],
      isbn: [
      this.book.isbn,
      Validators.compose([Validators.required, Validators.minLength(11)])
      ]
    });    

/*
    this.form = this.formbuilder.group({
      title: ["", Validators.required],
      isbn: [
        "",
      Validators.compose([Validators.required, Validators.minLength(11)])
      ],
      publisher: this.formbuilder.group({
            name:[""],
            url:[""]
      })
    });    
*/
  }

  public canSubmit(){
   // return this.form.hasError('required', ['title']);
    return this.form.valid;
   // return true;
  }

  public onSubmit():void{
        this.bookdata.createBook(this.book).subscribe(
          successFn=>{
            this.book=successFn
            this.message="saved '"+successFn.title+"' ";
            this.error=null;
          },
      errorFn=>{
        this.message=null;
        this.error="Error saving a book";
      }
    );
  }

}
