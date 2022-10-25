import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Daten } from './Daten';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  Data: Daten[] = []
  
  add(daten: Daten) {
    this.Data.push(daten);
  }
  getItems() {
    return this.Data;
  }
}