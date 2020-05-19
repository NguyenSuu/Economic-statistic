import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingFrameComponent } from './loading-frame/loading-frame.component';

@NgModule({
  declarations: [LoadingFrameComponent],
  imports: [CommonModule],
  exports: [LoadingFrameComponent]
})
export class LibModule {}
