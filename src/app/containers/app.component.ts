import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import * as Root from '../redusers/index';
import * as NoteActions from '../actions/note.actions';
import * as NoteSelectors from '../selectors/note.selectors';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex-container">
      <app-header />
      <app-input />
      <app-todo-list [notes]="payload$ | async" />
    </div>
  `,
  styles: [
    `
      .flex-container {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: stretch;

        width: 30%;
        margin: auto;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = 'todo-angular-app';
  payload$: Observable<Note[]> | null = null;

  constructor(private readonly store: Store<Root.AppState>) {
    this.payload$ = this.store.select(NoteSelectors.getNotes);
  }

  ngOnInit(): void {
    this.store.dispatch(NoteActions.restoreList());
  }
}
