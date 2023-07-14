import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss'],
})
export class ClassDetailsComponent implements OnInit {
  classDescription: string =
    'This class is created for Mathematics subject where all the assignments and updates will be posted.';
  className: string = 'Mathematics';

  constructor() {}

  ngOnInit(): void {}
}
