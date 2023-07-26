import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ThreadsService, ThreadsSettingService } from '../../services';

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
    private formBuilder: FormBuilder,
    private threadsService: ThreadsService,
    private threadsSettings: ThreadsSettingService,
  ) {}

  processThread(): void {
    const { value } = this.createThreadForm;
    this.threadsService.update(value);
  }

  onUpdate(): void {
    if (this.threadsSettings.updateOnChange) {
      this.processThread();
    }
  }

  onSubmit(): void {
    this.processThread();
  }
}