import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input() tooltip:string; 

  @HostListener('mouseenter') 
  onMouseEnter(){
    console.log('mouseenter:'+this.tooltip)
  };
  
  @HostListener('mousemove') 
  onMouseMove(){
    console.log('mousemove to:'+this.tooltip)
  };


  @HostListener('mouseleave') 
  onMouseLeave(){
    console.log('mouseleave'+this.tooltip)
    
  };
  
  constructor() { }

}
