import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';
import { ClassDetailsComponent } from './class-details.component';

describe('ClassDetailsComponent', () => {
  let component: ClassDetailsComponent;
  let fixture: ComponentFixture<ClassDetailsComponent>;
  let mockActions: any;

  beforeEach(async () => {
    mockActions = of({ type: '[Class Details] Update Class Details Success' }); // Mock successful action

    await TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({}), ReactiveFormsModule],
      providers: [
        ModalService,
        FormBuilder,
        { provide: Actions, useValue: mockActions },
      ],
      declarations: [ClassDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
