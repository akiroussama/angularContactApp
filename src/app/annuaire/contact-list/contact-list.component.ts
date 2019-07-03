import { Component, OnInit } from '@angular/core';
import { MockEmployees } from '../../mock-employees';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  employees = MockEmployees;

  constructor() { }

  ngOnInit() {
  }

}
