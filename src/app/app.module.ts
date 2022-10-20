import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { AufgabenComponent } from './aufgaben/aufgaben.component';
import { DatenComponent } from './daten/daten.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { FormsModule } from '@angular/forms'; 
import { LocalService } from './localestorage/local_storage.service';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    AufgabenComponent,
    DatenComponent,
    ApplyFormComponent,
    FormComponent,
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'Daten', component: DatenComponent },
      {path: 'Appcomponent', component: AppComponent} 
    ])
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
