import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BookListComponent } from "app/book/components/book-list/book-list.component";

@Injectable()
export class ConfirmCandeactivateGuard implements CanDeactivate<BookListComponent> {
  canDeactivate(
    component: BookListComponent):  boolean {
    return confirm('Are you sure?');
  }
}
