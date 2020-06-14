import { Component, ViewContainerRef, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';
import { Field } from '../../models/fiels.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  templateUrl: 'form-input.component.html',
})
export class FormInputComponent implements Field {
  @HostBinding('class') someField = 'form-group col-sm-6';
  config: FieldConfig;
  group: FormGroup;

  get field() {
    return this.group.get(this.config.name);
  }
}
