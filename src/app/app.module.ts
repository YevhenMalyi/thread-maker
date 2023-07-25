import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZonelessModule } from 'az-zoneless';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts';
import { HomeModule } from './pages/home';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LayoutsModule,
    HomeModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ZonelessModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
