import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DformComponent } from '../dform/containers/dform/dform.component';
import { FieldConfig } from '../dform/models/field-config.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dformdemo',
  templateUrl: './dformdemo.component.html',
  styleUrls: ['./dformdemo.component.scss'],
})
export class DformdemoComponent implements AfterViewInit {
  @ViewChild(DformComponent) form: DformComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Firs Name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)],
    },
    {
      type: 'input',
      label: 'Last name',
      name: 'name1',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)],
    },
    {
      type: 'input',
      label: 'Username',
      name: 'name2',
      placeholder: 'Enter your username',
      validation: [Validators.required, Validators.minLength(4)],
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required],
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
    },
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Todd Motto');
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}
