import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//    { path: '', pathMatch: 'full', redirectTo: '/books' },
    { path: 'books', loadChildren: './book/book.module#BookModule' },
    { path: 'hide-n-show', loadChildren: './hide-n-show/hide-n-show.module#HideNShowModule' },
    { path: 'mouse-in-the-box', loadChildren: './mouse-in-the-box/mouse-in-the-box.module#MouseInTheBoxModule' },
    { path: 'input-and-output', loadChildren: './input-and-output/input-and-output.module#InputAndOutputModule' }
  ];
export const routing = RouterModule.forRoot(routes);