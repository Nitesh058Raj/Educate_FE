import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { SideBarItemInterface } from 'src/app/models/common.model';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit method', () => {
    component.itemList = [{ label: 'abc', title: '' }];
    component.activeTab = 'abc';
    component.ngOnInit();
    expect(component.activeItem).toEqual({ label: 'abc', title: '' });
  });
  it('should call pressItem method', () => {
    const mockItem:SideBarItemInterface = { title: 'Abc', label: 'abc' };
    component.pressItem(mockItem);
    expect(component.activeItem).toEqual({ title: 'Abc', label: 'abc' });
  });
});
