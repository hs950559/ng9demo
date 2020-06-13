import { Component, OnInit, HostBinding } from '@angular/core';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox',
  template: `
    <ng-container [formGroup]="group">
      <label for="{{ config.name }}">{{ config.label }}</label>
      <div class="form-check" *ngFor="let option of config.options">
        <label class="form-check-label">
          <input
            type="checkbox"
            class="form-check-input"
            [value]="option.value"
            [formControlName]="config.name"
          />
          {{ option.name }}
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
}
