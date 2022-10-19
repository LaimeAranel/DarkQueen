import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { AufgabenComponent } from './aufgaben/aufgaben.component';
import { DatenComponent } from './daten/daten.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplyFormComponent } from './apply-form/apply-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AufgabenComponent,
    DatenComponent,
    ApplyFormComponent,
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'Daten', component: DatenComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
