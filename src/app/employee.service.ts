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
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('EmployeeService: fetched Employees !');
    return of(MockEmployees);
  }

}
