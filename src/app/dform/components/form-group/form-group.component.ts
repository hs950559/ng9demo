import { Component, OnInit, HostBinding } from '@angular/core';
import { Field } from '../../models/fiels.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements Field {
  @HostBinding('class') someField = 'form-group col-sm-6';
  config: FieldConfig;
  group: FormGroup;

  getFieldConfig(field) {
    console.log(this.config);
    console.log(field);
    field.name = `${this.config.name}.${field.name}`;
    return field;
  }
}
