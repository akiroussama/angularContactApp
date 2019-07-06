import { Component, OnInit } from '@angular/core';
import { MockEmployees } from '../../mock-employees';
import { Employee } from 'src/app/employee';
import { from } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  employees: Employee[];
  selectedEmp: Employee;
  onSelect(emp: Employee): void {
    this.selectedEmp = emp;
  }
  getEmployee(): void {
    this.employeeService.getEmployee()
    .subscribe(empl => this.employees = empl);
  }
  constructor( private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

}
