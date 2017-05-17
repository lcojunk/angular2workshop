import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputAndOutputMainComponent } from "app/input-and-output/input-and-output-main/input-and-output-main.component";


const routes: Routes = [{
  path: '',
  component: InputAndOutputMainComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputAndOutputRoutingModule { }
