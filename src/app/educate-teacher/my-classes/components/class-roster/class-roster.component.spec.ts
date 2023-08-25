import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRosterComponent } from './class-roster.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

describe('ClassRosterComponent', () => {
  let component: ClassRosterComponent;
  let fixture: ComponentFixture<ClassRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({})],
      declarations: [ClassRosterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
