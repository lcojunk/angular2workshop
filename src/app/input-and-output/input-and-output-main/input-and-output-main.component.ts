import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-and-output-main',
  templateUrl: './input-and-output-main.component.html',
  styleUrls: ['./input-and-output-main.component.css']
})
export class InputAndOutputMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked($event){
    console.log("was clicked!",$event);
  }


}
