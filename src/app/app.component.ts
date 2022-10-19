import { Component } from '@angular/core';
import {DatenComponent } from 'src/app/daten/daten.component';
import {Daten } from 'src/app/daten/Daten'
import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DarkQueen';
  showDaten?: Daten;
    onSelect(daten: Daten): void {
      this.showDaten = daten;
    }
  }
