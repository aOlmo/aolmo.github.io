import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicationsComponent } from './publications/publications.component';
import { ExpComponent } from './exp/exp.component';
import { HonorsComponent } from './honors/honors.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    ExpComponent,
    HonorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
