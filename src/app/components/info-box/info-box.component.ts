import { Component, OnInit } from '@angular/core';
//import { BookDataService } from "app/book/components/shared/book-data.service";
// import { BookDataService } from "/book-data.service";

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {


  //constructor(private bookDataService: BookDataService) { }
  
   ping(){
     console.log("ping!");
  //    this.BookDataService.ping();     
   }
  ngOnInit() {
  }

}
