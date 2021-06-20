import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdCheckboxModule,
  MdRadioModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { DataViewerComponent } from './data-viewer/data-viewer.component';
import {
  DataItemService,
  SharedStudent,
  SharedTeacher
} from './data-item.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdTabsModule,
    MdButtonModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdRadioModule
  ],
  declarations: [AppComponent, DataViewerComponent],
  bootstrap: [AppComponent],
  providers: [DataItemService, SharedStudent, SharedTeacher]
})
export class AppModule {}
