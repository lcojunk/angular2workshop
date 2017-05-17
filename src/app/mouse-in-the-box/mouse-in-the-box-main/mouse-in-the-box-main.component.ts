import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-in-the-box-main',
  templateUrl: './mouse-in-the-box-main.component.html',
  styleUrls: ['./mouse-in-the-box-main.component.css']
})
export class MouseInTheBoxMainComponent implements OnInit {

  x: number=0;
  y: number=0;

  constructor() { }

  ngOnInit() {
  }

  onMousemove($event:MouseEvent) {
    this.x = $event.clientX; 
    this.y = $event.clientY;
  }

}
