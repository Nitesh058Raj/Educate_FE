import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
  classList: string[] = [
    'Mathematics',
    'Science',
    'Science',
    'Biology',
    'Chemistry',
    'Physics',
  ];

  constructor() {}

  ngOnInit(): void {}
}
