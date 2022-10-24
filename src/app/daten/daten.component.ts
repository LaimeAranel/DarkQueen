import { Component, OnInit, Input } from '@angular/core';
import { Daten } from 'src/app/daten/Daten'
import { daten } from 'src/app/daten/mock-Daten'
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalService } from '../localestorage/local_storage.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-daten',
  templateUrl: './daten.component.html',
  styleUrls: ['./daten.component.css']
})
export class DatenComponent implements OnInit {
  // daten = Daten;
  Daten: Daten[] = [];
  constructor() { }

  selectedList!: Daten;
  onSelect(daten: Daten): void {
    this.selectedList = daten

  }
  deleteDaten() {
    Daten === undefined;
  }
  password = "hidden"
  public textShow = true;
  showText() {
    this.textShow = true;
  }
  hideText() {
    this.textShow = false;
  }

  ngOnInit(): void {
  }
}