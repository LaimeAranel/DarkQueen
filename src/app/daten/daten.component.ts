import { Component, OnInit, Input } from '@angular/core';
import { Daten } from 'src/app/daten/Daten'
import { daten } from 'src/app/daten/mock-Daten'
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalService } from '../localestorage/local_storage.service';
import { DetailFormComponent } from '../detail/detail.component';
import {DataService} from 'src/app/daten/Daten.service' 
import { Data } from '@angular/router';


@Component({
  selector: 'app-daten',
  templateUrl: './daten.component.html',
  styleUrls: ['./daten.component.css']
})
export class DatenComponent implements OnInit { 
daten: Daten[] = []
Data = daten
currentItem = ['Television'];
lastChanceItem = ['Beanbag'];
Daten = ["Beispiel"];
wishlist = ['Drone', 'Computer'];


  getDaten() {
    this.DataService.getDaten();
  }
  addData(Daten: string){
  this.Daten.push(Daten)
  }
  constructor(private DataService: DataService) { }

  ngOnInit(): void {
  }
}