import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as HtmlHelper from '../services/html.helper';
import * as NoteActions from '../actions/note.actions';
import * as Root from '../redusers/index';

@Component({
  selector: 'app-input',
  template: `
    <div class="flex-input">
      <input
        [value]="this.inputText"
        (input)="this.inputText = this.getValue($event)"
        type="text"
      />
      <button (click)="onAdd()">Add</button>
    </div>
  `,
  styles: [
    `
      .flex-input {
        display: flex;
        flex-flow: row;
      }

      .flex-input input {
        flex: 6 1;
      }

      .flex-input button {
        flex: 1 1;
        margin-left: 3%;
      }
    `,
  ],
})
export class InputComponent {
  inputText: string = '';

  getValue = HtmlHelper.getValue;

  constructor(private readonly store: Store<Root.AppState>) {}

  onAdd(): void {
    this.store.dispatch(NoteActions.addNote({ inputText: this.inputText }));
    this.inputText = '';
  }
}
