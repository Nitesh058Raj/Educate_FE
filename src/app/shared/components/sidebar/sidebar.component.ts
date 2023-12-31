import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideBarItemInterface } from 'src/app/models/common.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() selectedSidebarItem = new EventEmitter<SideBarItemInterface>();
  @Input() itemList: SideBarItemInterface[] = [];
  @Input() activeTab: string = '';
  activeItem!: SideBarItemInterface;

  constructor() {}

  ngOnInit(): void {
    this.activeItem =
      this.itemList.filter((item) => item.label === this.activeTab)[0] ||
      this.activeItem;
  }

  pressItem(item: SideBarItemInterface): void {
    this.activeItem = item;
    this.activeTab = item.label;
    this.selectedSidebarItem.emit(this.activeItem);
  }
}
