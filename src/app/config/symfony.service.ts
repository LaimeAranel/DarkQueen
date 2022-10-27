import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Daten } from '../daten/Daten';
@Injectable() export class Symfony {
  Daten= Daten
      baseURL: string = "https://localhost:8000/api/data";
      constructor(private http: HttpClient) {
      }
      getData(): Observable<any> {
        return this.http.get(this.baseURL)
      }
      AddData(): Observable<any> {
        return this.http.post(this.baseURL,this.Daten,)
      }
    
  
}