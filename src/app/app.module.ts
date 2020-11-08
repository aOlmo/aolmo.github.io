import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ExpComponent } from './exp/exp.component';
import { HonorsComponent } from './honors/honors.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
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
