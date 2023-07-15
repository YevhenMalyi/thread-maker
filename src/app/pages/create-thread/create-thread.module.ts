import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateThreadRoutingModule } from './create-thread-routing.module';
import { CreateThreadComponent } from './create-thread.component';


@NgModule({
  declarations: [
    CreateThreadComponent
  ],
  imports: [
    CommonModule,
    CreateThreadRoutingModule
  ]
})
export class CreateThreadModule { }
