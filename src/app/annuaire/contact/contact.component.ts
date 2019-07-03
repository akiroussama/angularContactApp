import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  employee: Employee = {
    id: 1,
    firstName: 'mohamed',
    lastName: 'akir',
    email: 'moakir@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
