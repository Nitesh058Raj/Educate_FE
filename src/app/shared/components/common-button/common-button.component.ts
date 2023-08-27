import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss'],
})
export class CommonButtonComponent implements OnInit {
  @Input() text: string = 'Button';
  @Input() variant: string = 'filled';
  @Input() disabled: boolean | null = false;
  @Input() bgColor: string = '#268aff';
  @Output() BtnClickEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    this.BtnClickEmitter.emit(this.text);
  }
}
