import { ValidatorFn, FormGroup, FormArray } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  id?: string;
  name: string;
  options?: string[] | object[];
  placeholder?: string;
  type?: string;
  validation?: ValidatorFn[];
  value?: any;
  group?: boolean;
  array?: boolean;
  children?: FieldConfig[];
}
