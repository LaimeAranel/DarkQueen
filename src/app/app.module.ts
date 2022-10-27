import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';

import { DatenComponent } from './daten/daten.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalService } from './localestorage/local_storage.service';
import { DetailFormComponent } from './detail/detail.component';
import { InputOutputComponent } from './input-output/input-output.component';

import { HttpClientModule } from '@angular/common/http';
import { Symfony } from './config/symfony.service';
=======
import { OutputInputComponent } from './output-input/output-input.component';





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
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'Daten', component: DatenComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [LocalService, Symfony],
  bootstrap: [AppComponent]
})
export class AppModule { }