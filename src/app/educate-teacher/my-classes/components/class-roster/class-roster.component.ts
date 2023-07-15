import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-roster',
  templateUrl: './class-roster.component.html',
  styleUrls: ['./class-roster.component.scss'],
})
export class ClassRosterComponent implements OnInit {
  studentDetails: {
    id: number;
    name: string;
    email: string;
    contact: number;
  }[] = [
    {
      id: 1,
      name: 'Nitesh Raj',
      email: 'Nit.raj@g.com',
      contact: 123456789,
    },
    {
      id: 2,
      name: 'Vinay Gupta',
      email: 'Vin.g@g.com',
      contact: 87654321,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
