import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditThreadRoutingModule } from './edit-thread-routing.module';
import { EditThreadComponent } from './edit-thread.component';


@NgModule({
  declarations: [
    EditThreadComponent
  ],
  imports: [
    CommonModule,
    EditThreadRoutingModule
  ]
})
export class EditThreadModule { }
