import { Component, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';
import { Field } from '../../models/fiels.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  template: `
    <ng-container [formGroup]="group">
      <label for="{{ config.id }}">{{ config.label }}</label>
      <select
        id="{{ config.id }}"
        class="form-control"
        [formControlName]="config.name"
      >
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
    </ng-container>
  `,
})
export class FormSelectComponent implements Field {
  @HostBinding('class') someField = 'form-group col-sm-6';
  config: FieldConfig;
  group: FormGroup;
}
