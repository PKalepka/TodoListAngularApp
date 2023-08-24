import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex-header">
      <h2>Todo List</h2>
    </div>
  `,
  styles: [
    `
      .flex-header {
        align-self: center;
      }
    `,
  ],
})
export class HeaderComponent {}
