import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // TODO: Get the user name from the NgRx store
  currentUserName = 'Mr. Nikhil';

  constructor() {}

  onProfileClick() {
    // TODO: Open popup to show user profile
    // * As 'app-header' is shared component, we have to think on this method
  }
}
