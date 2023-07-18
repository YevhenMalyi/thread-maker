import { NgModule } from '@angular/core';

import { CreateThreadFormComponent } from './create-thread-form.component';
import { MaterialFormModule } from 'src/app/core/modules';

@NgModule({
  imports: [
    MaterialFormModule,
  ],
  exports: [CreateThreadFormComponent],
  declarations: [CreateThreadFormComponent],
  providers: [],
})
export class CreateThreadFormModule { }
