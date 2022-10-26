import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';

import { DatenComponent } from './daten/daten.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalService } from './localestorage/local_storage.service';
import { DetailFormComponent } from './detail/detail.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { OutputInputComponent } from './output-input/output-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    DatenComponent,
    DetailFormComponent,
    InputOutputComponent,
    OutputInputComponent,

 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'Daten', component: DatenComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
