import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DformRoutingModule } from './dform-routing.module';
import { DformComponent } from './containers/dform/dform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';

@NgModule({
  declarations: [
    DformComponent,
    DynamicFieldDirective,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
  ],
  imports: [ReactiveFormsModule, CommonModule, DformRoutingModule],
  exports: [DformComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
  ],
})
export class DformModule {}
