import { Component, OnInit, HostBinding } from '@angular/core';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup, FormArray } from '@angular/forms';
import { Field } from '../../models/fiels.interface';

@Component({
  selector: 'app-form-checkbox',
  template: `
    <ng-container [formGroup]="group">
      <label for="{{ config.name }}">{{ config.label }}</label>
      <div
        class="form-check"
        *ngFor="let option of fields.controls; let i = index"
      >
        <label class="form-check-label">
          <input
            type="checkbox"
            class="form-check-input"
            [formControl]="option"
          />
          {{ (config?.options)[i]?.name }}
        </label>
      </div>
    </ng-container>
  `,
  styleUrls: ['./form-checkbox.component.scss'],
})
export class FormCheckboxComponent implements Field {
  @HostBinding('class') someField = 'form-group col-sm-6';
  config: FieldConfig;
  group: FormGroup;

  get fields() {
    return this.group.get(this.config.name) as FormArray;
  }
}
