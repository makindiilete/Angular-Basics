import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpService } from '../Http & Observable/http.service';
import { IEmployee } from '../Http & Observable/employee';
import { IPost } from '../Http & Observable/post';

@Component({
  selector: 'app-second-detail',
  template: `
    <h1>Employee Details</h1>
    <ul>
      <li *ngFor="let emp of employee">
        {{ emp.id }} - {{ emp.name }} - {{ emp.age }}
      </li>
    </ul>
    <h1>User details</h1>
    <ul>
      <li *ngFor="let user of users">
        {{ user.id }} - {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <button (click)="addPost()">Add Post</button>
    <button (click)="updatePost()">Edit Post</button>
    <button (click)="deletePost()">Delete Post</button>
    <!--    we display error msg if available-->
    <p [style.color]="'red'">{{ errorMsg }}</p>
  `,
  styleUrls: ['./second-detail.component.css'],
})
export class SecondDetailComponent implements OnInit {
  employee;
  users: IEmployee[];
  singleUser: IEmployee[];
  post: IPost = {
    title: 'Forex Trading',
    body: 'How To Trade The Market',
    id: 11,
  };
  postEdit: IPost = {
    title: 'Forex Trading',
    body: 'How To Trade The Market Part 2',
    id: 11,
  };
  errorMsg: string;
  constructor(
    private employeeService: EmployeeService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployees();
    this.fetchPosts();
    this.fetchUsers();
  }

  // GET
  fetchUsers() {
    this.httpService.getUser(5).subscribe(
      (data) => {
        this.singleUser = data;
        console.log('User = ', data);
      }, // if there is an error, we handle it
      (error) => (this.errorMsg = error)
    );
  }

  // GET
  fetchPosts() {
    this.httpService.getUsers().subscribe(
      (data) => {
        console.log('Emp data = ', data);
        this.users = data;
      },
      // if there is an error, we handle it
      (error) => (this.errorMsg = error)
    );
  }

  // POST
  addPost() {
    this.httpService.createPost(this.post).subscribe(
      (data) => console.log(data), // if there is an error, we handle it
      (error) => (this.errorMsg = error)
    );
  }

  // PUT
  updatePost() {
    this.httpService.editPost(this.postEdit).subscribe(
      (data) => console.log(data),
      // if there is an error, we handle it
      (error) => (this.errorMsg = error)
    );
  }

  // DELETE
  deletePost() {
    this.httpService.deletePost().subscribe(
      (data) => console.log(data),
      // if there is an error, we handle it
      (error) => (this.errorMsg = error)
    );
  }
}
