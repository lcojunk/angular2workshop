import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HideNShowMainComponent } from "app/hide-n-show/hide-n-show-main/hide-n-show-main.component";


const routes: Routes = [{
  path: '',
  component: HideNShowMainComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HideNShowRoutingModule { }
