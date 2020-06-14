import { Component, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';
import { Field } from '../../models/fiels.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'form-button',
  styleUrls: ['form-button.component.scss'],
  template: `
    <ng-container [formGroup]="group">
      <button type="button" class="btn btn-link mr-2">Cancel</button>
      <button
        [disabled]="config.disabled"
        type="submit"
        class="btn btn-primary"
      >
        {{ config.label }}
      </button>
      <button type="button" class="btn btn-outline-secondary ml-auto">
        Next Page
      </button>
    </ng-container>
  `,
})
export class FormButtonComponent implements Field {
  @HostBinding('class') someField = 'd-flex col-12 mt-3 w-100';
  config: FieldConfig;
  group: FormGroup;
}
