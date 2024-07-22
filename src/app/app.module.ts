// app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBackgroundDirective } from './CustomDirectives/SetBackground.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SetBackgroundDirective],
  exports: [SetBackgroundDirective]
})
export class AppModule {}