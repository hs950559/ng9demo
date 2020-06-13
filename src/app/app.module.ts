import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DformdemoComponent } from './dformdemo/dformdemo.component';
import { DformModule } from './dform/dform.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DformdemoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DformModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
