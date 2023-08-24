import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { InputComponent } from './input.component';
import { ListItemComponent } from './list-item.component';
import { TodoListComponent } from './todo-list.component';
import { PipesModule } from '../pipes/pipes.module';

export const COMPONENTS = [
  HeaderComponent,
  InputComponent,
  ListItemComponent,
  TodoListComponent,
];

@NgModule({
  imports: [CommonModule, PipesModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
