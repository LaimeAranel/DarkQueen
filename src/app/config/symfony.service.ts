import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Daten } from '../daten/Daten';
import { Router } from '@angular/router'; 
import { DetailFormComponent } from '../detail/detail.component';
import { HttpHeaders } from '@angular/common/http';
@Injectable() export class Symfony {

  
  baseURL: string = "https://localhost:8000/api/data";
      constructor(private http: HttpClient) {
      }
      getData(): Observable<any> {
        return this.http.get(this.baseURL)
      }

     
}