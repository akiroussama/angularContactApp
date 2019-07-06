import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { MockEmployees } from './mock-employees';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService) { }

  getEmployee(): Observable<Employee[]> {
    // TODO: send the message _after_ fetching the employeees
    this.messageService.add('EmployeeService: fetched Employees !');
    return of(MockEmployees);
  }

  getEmployeeById(id: number): Observable<Employee> {
    // TODO: send the message _after_ fetching the employee
    this.messageService.add(`EmployeeService: fetched hero id=${id}`);
    return of(MockEmployees.find(employee => employee.id === id));
  }

}
