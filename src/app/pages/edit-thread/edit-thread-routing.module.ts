import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditThreadComponent } from './edit-thread.component';

const routes: Routes = [{ path: '', component: EditThreadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditThreadRoutingModule { }
