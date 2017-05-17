import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from "app/components/welcome-page/welcome-page.component";

const routes: Routes = [
//    { path: '', pathMatch: 'full', redirectTo: '/books' },
    { path: '', component: WelcomePageComponent },
    { path: 'books', loadChildren: './book/book.module#BookModule' },
    { path: 'hide-n-show', loadChildren: './hide-n-show/hide-n-show.module#HideNShowModule' },
    { path: 'mouse-in-the-box', loadChildren: './mouse-in-the-box/mouse-in-the-box.module#MouseInTheBoxModule' },
    { path: 'input-and-output', loadChildren: './input-and-output/input-and-output.module#InputAndOutputModule' },
    { path: '**', component: WelcomePageComponent }
  ];
export const routing = RouterModule.forRoot(routes);