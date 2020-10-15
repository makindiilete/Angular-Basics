import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { IPost } from './post';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  getUrl = 'https://jsonplaceholder.typicode.com/users';
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  updateUrl = 'https://jsonplaceholder.typicode.com/posts/11';
  constructor(private http: HttpClient) {}

  // GET
  // ds method returns an observable of type IEmployee (model) Array
  getUsers(): Observable<IEmployee[]> {
    // we cast d response/observable from http get request to our IEmployee model
    return this.http.get<IEmployee[]>(this.getUrl);
  }

  // GET BY ID
  getUser(id: number): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.getUrl + '/' + id);
  }

  // POST
  createPost(postDetails: IPost): Observable<any> {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    return this.http.post(this.postUrl, postDetails, { headers });
  }

  // PUT
  editPost(postDetails: IPost): Observable<any> {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    return this.http.put(this.updateUrl, postDetails, { headers });
  }
  // DELETE
  deletePost(): Observable<any> {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    return this.http.delete(this.updateUrl, { headers });
    // we catch any http error and call the error handler to handle the error
    // .pipe(catchError(this.httpErrorHandler))
  }

  /*  // our error handler that throw any caught error so the component can display the error
  httpErrorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Something Went Wrong');
  }*/
}
