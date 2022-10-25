import { Component, OnInit, Input } from '@angular/core';
import { Daten } from 'src/app/daten/Daten'
import { daten } from 'src/app/daten/mock-Daten'
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalService } from '../localestorage/local_storage.service';
import { DetailForm } from '../detail/detail.component';

@Component({
  selector: 'app-daten',
  templateUrl: './daten.component.html',
  styleUrls: ['./daten.component.css']
})
export class DatenComponent implements OnInit {

DetailForm = daten

  constructor() { }
  add() {
    this.DetailForm.push();
  }

  ngOnInit(): void {
  }
}