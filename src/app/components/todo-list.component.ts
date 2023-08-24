import { Component, Input } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-todo-list',
  template: `
    <div class="flex-todolist">
      <ul *ngFor="let item of notes">
        <app-list-item [note]="item" />
      </ul>
    </div>
  `,
  styles: [
    `
      ul {
        padding-left: 0px;
      }
    `,
  ],
})
export class TodoListComponent {
  @Input() notes: Note[] | null = [];
}
