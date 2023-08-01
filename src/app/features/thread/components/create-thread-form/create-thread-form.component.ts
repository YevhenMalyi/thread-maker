import { ApplicationRef, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ThreadsService, ThreadsSettingService } from '../../services';

@Component({
  selector: 'app-create-thread-form',
  templateUrl: './create-thread-form.component.html',
  styleUrls: ['./create-thread-form.component.scss']
})
export class CreateThreadFormComponent implements OnInit {
  createThreadForm: FormGroup = this.formBuilder.group({
    text: ['', Validators.required],
    prefix: [''],
    postfix: ['']
  });

  updateOnChange: boolean = false;
  destroyRef = inject(DestroyRef);
  
  constructor(
    private app: ApplicationRef,
    private formBuilder: FormBuilder,
    private threadsService: ThreadsService,
    private threadsSettings: ThreadsSettingService,
  ) {}

  ngOnInit(): void {
    requestAnimationFrame(() => this.app.tick());
    
    this.threadsSettings
      .getUpdateOnChange()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
        this.updateOnChange = value; 
      });
  }

  processThread(): void {
    const { value } = this.createThreadForm;
    this.threadsService.update(value);
  }

  onUpdate(): void {
    if (this.updateOnChange) {
      this.processThread();
    }
  }

  onSubmit(): void {
    this.processThread();
  }
}