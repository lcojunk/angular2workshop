import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseInTheBoxMainComponent } from './mouse-in-the-box-main/mouse-in-the-box-main.component';
import { FormsModule } from "@angular/forms";
import { MouseInTheBoxRoutingModule } from "app/mouse-in-the-box/mouse-in-the-box-routing.module";
import { TooltipDirective } from "app/shared/tooltip.directive";
import { SharedComponentsModule } from "app/shared-components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MouseInTheBoxRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MouseInTheBoxMainComponent]
})
export class MouseInTheBoxModule { }
