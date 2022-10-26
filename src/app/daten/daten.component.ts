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

password= ['Television'];
username = ['Beanbag'];
Daten = ["Beispiel","Beispiel","Beispiel","Beispiel"]
email = ['Drone',];


  getDaten() {
    this.DataService.getDaten();
  }
  addData(Daten: string){
  this.Daten.push(Daten)
  }
  deleteData(){
  this.Daten.pop()
  }
  selected?: Daten;
onSelect(daten: Daten): void {
  this.selected = daten;
}

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
  }
}