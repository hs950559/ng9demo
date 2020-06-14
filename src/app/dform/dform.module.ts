import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DformRoutingModule } from './dform-routing.module';
import { DformComponent } from './containers/dform/dform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { FormGroupComponent } from './components/form-group/form-group.component';

@NgModule({
  declarations: [
    DformComponent,
    DynamicFieldDirective,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    FormTextareaComponent,
    FormGroupComponent,
  ],
  imports: [ReactiveFormsModule, CommonModule, DformRoutingModule],
  exports: [DformComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormCheckboxComponent,
    FormRadioComponent,
  ],
})
export class DformModule {}
