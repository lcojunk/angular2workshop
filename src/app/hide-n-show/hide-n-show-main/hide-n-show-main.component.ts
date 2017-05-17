import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hide-n-show-main',
  templateUrl: './hide-n-show-main.component.html',
  styleUrls: ['./hide-n-show-main.component.css']
})
export class HideNShowMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 ping(){
     console.log("Ping was sent at "+(new Date()).toString());
  }
  

}
