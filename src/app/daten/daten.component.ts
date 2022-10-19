import { Component, OnInit } from '@angular/core';
import {Daten} from 'src/app/daten/Daten'
import {daten} from 'src/app/daten/mock-Daten'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-daten',
  templateUrl: './daten.component.html',
  styleUrls: ['./daten.component.css']
})
export class DatenComponent implements OnInit {
Daten = daten
    daten: Daten = {
      id: "ralf",
      username: 'Windstorm',
      passwort: "ralf123",
      email: "Ralfdiegeilesocke@gmx.de"
    };
    showDaten?: Daten;
    onSelect(daten: Daten): void {
      this.showDaten = daten;
    }
 
  constructor() { }

  ngOnInit(): void {
  }

}
