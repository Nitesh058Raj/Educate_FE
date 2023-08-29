import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss'],
})
export class CommonButtonComponent implements AfterViewChecked {
  @Input() text: string = 'Button';
  @Input() variant: string = 'filled';
  @Input() disabled: boolean | null = false;
  @Input() bgColor: string = '#268aff';
  @Output() BtnClickEmitter: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('buttonRef', { static: true }) buttonElement!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewChecked(): void {
    if (this.disabled) {
      this.renderer.addClass(this.buttonElement.nativeElement, 'disabled');
    } else {
      this.renderer.removeClass(this.buttonElement.nativeElement, 'disabled');
    }
  }

  onButtonClick() {
    this.BtnClickEmitter.emit(this.text);
  }
}
