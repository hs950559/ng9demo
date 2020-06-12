import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DformRoutingModule } from './dform-routing.module';
import { DformComponent } from './containers/dform/dform.component';


@NgModule({
  declarations: [DformComponent],
  imports: [
    CommonModule,
    DformRoutingModule
  ]
})
export class DformModule { }
