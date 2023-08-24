import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './state';
import { ClassListSelectors } from './state/selectors';

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.scss'],
})
export class MyClassesComponent implements OnInit {
  displayComponent$: Observable<boolean> | undefined;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.displayComponent$ = this.store.select(
      ClassListSelectors.getDisplayComponent
    );
  }
}
