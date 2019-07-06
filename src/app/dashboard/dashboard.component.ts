import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeees();
  }

  getEmployeees(): void {
    this.employeeService.getEmployee()
    .subscribe(empl => this.employees = empl.slice(1, 5));
  }

}
