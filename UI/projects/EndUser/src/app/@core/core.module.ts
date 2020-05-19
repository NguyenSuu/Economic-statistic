import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [CommonModule],
  exports: [
    ...fromComponents.components
  ]
})
export class CoreModule {}
