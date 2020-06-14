import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  exportAs: 'dynamicForm',
  selector: 'app-dform',
  templateUrl: './dform.component.html',
  styleUrls: ['./dform.component.scss'],
})
export class DformComponent implements OnInit, OnChanges {
  @Input()
  config: FieldConfig[] = [];

  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup;

  get controls() {
    return this.config.filter(({ type }) => type !== 'button');
  }
  get changes() {
    return this.form.valueChanges;
  }
  get valid() {
    return this.form.valid;
  }
  get value() {
    return this.form.value;
  }
  get errors() {
    return this.form.errors;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup(this.controls);
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map((item) => item.name);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const config = this.config.find((control) => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });
    }
  }

  createGroup(fieldControls) {
    const group = this.fb.group({});
    fieldControls.forEach((control) => {
      if (control.array) {
        group.addControl(control.name, this.createFormArray(control));
      } else if (control.group) {
        group.addControl(control.name, this.createGroup(control.children));
      } else {
        group.addControl(control.name, this.createControl(control));
      }
    });
    return group;
  }

  createFormArray(control: any) {
    const arr = control.options.map((option) => {
      return this.fb.control(option.selected);
    });
    return this.fb.array(arr);
  }

  createControl(config: FieldConfig) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.formSubmit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    setTimeout(() => {
      if (this.form.controls[name]) {
        const method = disable ? 'disable' : 'enable';
        this.form.controls[name][method]();
        return;
      }

      this.config = this.config.map((item) => {
        if (item.name === name) {
          item.disabled = disable;
        }
        return item;
      });
    });
  }

  setValue(name: string, value: any) {
    setTimeout(() => {
      this.form.controls[name].setValue(value, { emitEvent: true });
    });
  }
}
