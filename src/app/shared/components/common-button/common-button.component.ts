import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss'],
})
export class CommonButtonComponent implements OnInit {
  @Input() text: string = 'Button';
  @Input() variant: string = 'filled';
  @Input() disabled: boolean = false;
  @Input() bgColor: string = '#268aff';

  constructor() {}

  ngOnInit(): void {}
}
