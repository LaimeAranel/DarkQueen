import { Injectable } from '@angular/core';
import { Daten } from './Daten';
import { daten } from './mock-Daten';
import { DetailFormComponent } from '../detail/detail.component';
 import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  Daten: Daten[] = []
 daten = daten

  getDaten(): Daten[]{ 
  console.log(daten)
 return daten

  }

  add(daten: Daten){
    console.log(daten)
    return this.Daten.push(daten);
    
  }
}