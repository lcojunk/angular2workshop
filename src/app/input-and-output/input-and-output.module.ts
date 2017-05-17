import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAndOutputMainComponent } from './input-and-output-main/input-and-output-main.component';
import { FormsModule } from "@angular/forms";
import { InputAndOutputRoutingModule } from "app/input-and-output/input-and-output-routing.module";
import { TitleBoxComponent } from './title-box/title-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputAndOutputRoutingModule
  ],
  declarations: [InputAndOutputMainComponent, TitleBoxComponent]
})
export class InputAndOutputModule { }
