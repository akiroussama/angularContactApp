import { Component, OnInit } from '@angular/core';
import { MockEmployees } from '../../mock-employees';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  employees = MockEmployees;
  selectedEmp: Employee;
  onSelect(emp: Employee): void {
    this.selectedEmp = emp;
  }

  constructor() { }

  ngOnInit() {
  }

}
