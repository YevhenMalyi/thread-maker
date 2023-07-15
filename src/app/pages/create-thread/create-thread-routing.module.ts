import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThreadComponent } from './create-thread.component';

const routes: Routes = [{ path: '', component: CreateThreadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateThreadRoutingModule { }
