import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';
import { ResourcesComponent } from './resources.component';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;
  let mockAction: any;

  beforeEach(async () => {
    mockAction = of({ type: '[Resources] Load Resources' });
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({}), ReactiveFormsModule],
      providers: [
        ModalService,
        FormBuilder,
        { provide: Actions, useValue: mockAction },
      ],
      declarations: [ResourcesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
