import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrikeThroughTextPipe } from './strike-through-text.pipe';

export const PIPES = [StrikeThroughTextPipe];

@NgModule({
  imports: [CommonModule],
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
