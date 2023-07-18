import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ThreadsService } from '../../services';

@Component({
  selector: 'app-create-thread-form',
  templateUrl: './create-thread-form.component.html',
  styleUrls: ['./create-thread-form.component.scss']
})
export class CreateThreadFormComponent implements OnInit {
  createThreadForm: FormGroup = this.formBuilder.group({
    text: ['', Validators.required],
    prefix: [''],
    suffix: ['']
  });
  
  constructor(
    private threadsService: ThreadsService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.threadsService.test();
  }

  onFormSubmit(): void {
    console.log(this.createThreadForm);
    this.threadsService.test();
  }
}