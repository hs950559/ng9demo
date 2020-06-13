import { Component, OnInit, HostBinding } from '@angular/core';
import { Field } from '../../models/fiels.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'form-textarea',
  template: `
    <ng-container [formGroup]="group">
      <label for="{{ config.id }}">{{ config.label }}</label>
      <textarea
        id="{{ config.id }}"
        class="form-control"
        cols="30"
        rows="3"
        [formControlName]="config.name"
      ></textarea>
    </ng-container>
  `,
  styleUrls: ['./form-textarea.component.scss'],
})
export class FormTextareaComponent implements Field {
  @HostBinding('class') someField = 'form-group col-sm-6';
  config: FieldConfig;
  group: FormGroup;
}
