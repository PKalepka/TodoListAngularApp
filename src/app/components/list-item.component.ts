import { Component, Input } from '@angular/core';
import { Note } from '../models/note';
import { Store } from '@ngrx/store';
import * as NoteActions from '../actions/note.actions';
import * as Root from '../redusers/index';

@Component({
  selector: 'app-list-item',
  template: `
    <li class="flex-listitem">
      <input
        [checked]="note.isChecked ? 'checked' : ''"
        (change)="onChange()"
        type="checkbox"
      />
      <div [innerHTML]="note.text | strikeThroughText : note.isChecked"></div>
      <button (click)="onDelete()">X</button>
    </li>
  `,
  styles: [
    `
      .flex-listitem {
        display: flex;
        flex-flow: row;

        padding: 1% 0;
      }

      .flex-listitem input {
        margin-right: 5%;
      }

      .flex-listitem div {
        width: 100%;
      }
    `,
  ],
})
export class ListItemComponent {
  @Input() note!: Note;

  constructor(private readonly store: Store<Root.AppState>) {}

  onChange(): void {
    this.store.dispatch(NoteActions.checkNote({ id: this.note.id }));
  }

  onDelete(): void {
    this.store.dispatch(NoteActions.deleteNote({ id: this.note.id }));
  }
}
