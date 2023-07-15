import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss'],
})
export class SchoolDetailsComponent implements OnInit {
  schoolName: string = 'Mohandas Karamchandra High School';
  schoolAddr: string =
    '23/P, Gateway road, Near to old court, Anand, Gujarat [ 388 001 ]';

  constructor() {}

  ngOnInit(): void {}
}
