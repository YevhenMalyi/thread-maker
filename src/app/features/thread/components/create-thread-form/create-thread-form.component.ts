import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ThreadsService } from '../../services';

@Component({
  selector: 'app-create-thread-form',
  templateUrl: './create-thread-form.component.html',
  styleUrls: ['./create-thread-form.component.scss']
})
export class CreateThreadFormComponent {
  createThreadForm: FormGroup = this.formBuilder.group({
    text: ['', Validators.required],
    prefix: [''],
    postfix: ['']
  });
  
  constructor(
    private threadsService: ThreadsService,
    private formBuilder: FormBuilder,
  ) {}

  updateThread(): void {
    const { value } = this.createThreadForm;
    this.threadsService.update(value);
  }

  onFormSubmit(): void {
    const { value } = this.createThreadForm;
    this.threadsService.update(value);
  }
}