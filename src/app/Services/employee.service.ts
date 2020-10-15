import { Injectable } from '@angular/core';

// ds meta tag tells angular dt ds is not jst a normal class but it can have dependency which can be injected in its constructor
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  // ds method shares employee data to every component dt depends on ds service class and call ds method
  getEmployees() {
    return [
      { id: 1, name: 'Andrea', age: 30 },
      { id: 2, name: 'Thomas', age: 12 },
      { id: 3, name: 'David', age: 23 },
      { id: 4, name: 'Dayo', age: 27 },
    ];
  }
}
