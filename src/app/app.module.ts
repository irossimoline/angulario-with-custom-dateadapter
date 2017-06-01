import { BrowserModule  } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule, DateAdapter, MD_DATE_FORMATS } from '@angular/material';


import { AppComponent } from './app.component';

import { MY_DATE_FORMATS } from "./locale-adapters/MY_DATE_FORMATS";
import { MyDateAdapter } from "./locale-adapters/MyDateAdapter";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-UY' },
    { provide: DateAdapter, useClass: MyDateAdapter },
    { provide: MD_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
