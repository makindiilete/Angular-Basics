import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-first-list',
  template: `
    <h1>Employee List</h1>
    <ul>
      <li *ngFor="let emp of employees">{{ emp.name }}</li>
    </ul>
  `,
  styleUrls: ['./first-list.component.css'],
})
export class FirstListComponent implements OnInit {
  employees = [];

  // we inject d employeeService into d constructor of ds component
  constructor(private employeeService: EmployeeService) {}

  // inside d ngOnInit lifecycle, we set d value returned from getEmployees() to our empty array
  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
}
