import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MouseInTheBoxMainComponent } from "app/mouse-in-the-box/mouse-in-the-box-main/mouse-in-the-box-main.component";


const routes: Routes = [{
  path: '',
  component: MouseInTheBoxMainComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MouseInTheBoxRoutingModule { }
