import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';

import { DatenComponent } from './daten/daten.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalService } from './localestorage/local_storage.service';
import { DetailComponent } from './detail/detail.component';




@NgModule({
  declarations: [
    AppComponent,
    DatenComponent,
    DetailComponent,

 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'Daten', component: DatenComponent },
    ])
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
