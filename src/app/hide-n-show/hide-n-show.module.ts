import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideNShowMainComponent } from './hide-n-show-main/hide-n-show-main.component';
import { FormsModule } from "@angular/forms";
import { HideNShowRoutingModule } from "app/hide-n-show/hide-n-show-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HideNShowRoutingModule
  ],
  declarations: [HideNShowMainComponent]
})
export class HideNShowModule { }
