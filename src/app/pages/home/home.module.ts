import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeaturesModule } from 'src/app/features/thread';
import { HomeContentComponent } from './home-content';

@NgModule({
  declarations: [
    HomeComponent,
    HomeContentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FeaturesModule,
  ]
})
export class HomeModule { }
