import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptService implements HttpInterceptor {
  constructor() {}

  // d intercept method takes 2 params, d http req and next to call d next handler in d chain
  intercept(
    // request to handle
    req: HttpRequest<any>,
    // call d next httpHandler in d chain
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // handle the req
    return next.handle(req).pipe(
      // retry d req again once
      retry(1),
      // catch any http err
      catchError((err: HttpErrorResponse) => {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          //  client side error
          errorMessage = `Error: ${err.error.message}`;
        } else {
          //  server-side error
          errorMessage = `Error Status: ${err.status}\nMessage: ${err.message}`;
        }
        // log d error
        console.log('Error Intercepted : -', errorMessage);
        // then throw it so d component can make use of it
        return throwError(errorMessage);
      })
    );
  }
}
