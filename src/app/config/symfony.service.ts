import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDaten } from '../daten/Daten';
@Injectable() export class Symfony {

  
  baseURL: string = "https://localhost:8000/api/data";
      constructor(private http: HttpClient) {
      }
      getData(): Observable<any> {
        return this.http.get(this.baseURL)
      }
      AddUserData(formData: UserDaten): Observable<any>{
        return this.http.post(this.baseURL, formData, )
      }
     
}