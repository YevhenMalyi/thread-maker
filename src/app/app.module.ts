import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
