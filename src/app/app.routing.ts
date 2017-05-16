import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/books'},
    {path: 'books', loadChildren: './book/book.module#BookModule'}
  ];
export const routing = RouterModule.forRoot(routes);