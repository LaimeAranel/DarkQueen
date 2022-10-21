import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Daten } from './Daten';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  createDb() {
    const Data = [
        { id: "Beta", username: 'Dr. Nice', password: "adsoif", email: "RistawistaAlasista@gmx.de" },
        { id: "Alpha", username: 'Bombasto', password: "adsoif", email: "RistawistaAlasista@gmx.de" },
        { id: "Microsoft", username: 'Celeritas', password: "adsoif", email: "RistawistaAlasista@gmx.de" },
        { id: "Ralfhausen", username: 'Magneta', password: "adsoif", email: "RistawistaAlasista@gmx.de" },
        { id: "rubberband", username: 'RubberMan', password: "adsoif", email: "RistawistaAlasista@gmx.de" },
        { id: "rastawista", username: 'Dynama',  password: "adsoif", email: "RistawistaAlasista@gmx.de" }, 
    ];
    return {Data};
  }
}