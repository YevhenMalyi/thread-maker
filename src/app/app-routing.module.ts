import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  { 
    path: 'create', 
    loadChildren: () => import('./pages/create-thread/create-thread.module').then(m => m.CreateThreadModule)
  },
  { 
    path: 'edit', 
    loadChildren: () => import('./pages/edit-thread/edit-thread.module').then(m => m.EditThreadModule) 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
