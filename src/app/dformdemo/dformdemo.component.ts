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
      label: 'First Name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(2)],
    },
    {
      type: 'input',
      label: 'Last name',
      name: 'name1',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)],
    },
    {
      type: 'textarea',
      label: 'Address 1',
      name: 'address1',
      placeholder: 'Enter your street 1',
    },
    {
      type: 'checkbox',
      label: 'Skills',
      name: 'skills',
      array: true,
      options: [
        { name: 'JS', selected: true, id: 12 },
        { name: 'CSS', selected: false, id: 2 },
      ],
    },
    {
      type: 'radio',
      label: 'Gender',
      name: 'gender',
      options: [
        {
          name: 'Male',
          value: 'male',
        },
        {
          name: 'Female',
          value: 'female',
        },
      ],
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

    // this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Tejas');
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}
