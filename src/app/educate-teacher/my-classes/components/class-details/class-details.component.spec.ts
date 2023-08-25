import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ClassDetailsComponent } from './class-details.component';

describe('ClassDetailsComponent', () => {
  let component: ClassDetailsComponent;
  let fixture: ComponentFixture<ClassDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({})],
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
