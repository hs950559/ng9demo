import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsernameValidators } from '../shared/validators/username-validators';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  skills1 = [
    { id: 'java', name: 'Java' },
    { id: 'php', name: 'PHP' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'mongodb', name: 'MongoDB' },
  ];
  form: FormGroup = new FormGroup({
    name: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6),
        UsernameValidators.cannotContainSpace,
      ],
      UsernameValidators.shoulBeUnique
    ),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
    }),
    skills: new FormArray([]),
  });

  get name() {
    return this.form.get('name');
  }

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    console.log(this.form.value);
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  addSkill(skill: HTMLInputElement) {
    this.skills.push(new FormControl(skill.value));
    skill.value = '';
  }

  removeSkill(skill) {
    const index = this.skills.controls.indexOf(skill);
    this.skills.removeAt(index);
  }
}
