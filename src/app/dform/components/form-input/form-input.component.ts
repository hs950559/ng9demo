import { Component, ViewContainerRef, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';
import { Field } from '../../models/fiels.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  template: `
    <ng-container [formGroup]="group">
      <label for="{{ config.id }}">{{ config.label }}</label>
      <input
        type="text"
        class="form-control"
        id="{{ config.id }}"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name"
      />
    </ng-container>
  `,
})
export class FormInputComponent implements Field {
  @HostBinding('class') someField = 'form-group col-sm-6';
  config: FieldConfig;
  group: FormGroup;
}
