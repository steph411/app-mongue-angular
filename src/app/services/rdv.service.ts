import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  private baseUrl = 'http://localhost:8080/crfilmt-app/api/v1/rdv';

  constructor(private http: HttpClient) { }

  getRdv(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRdv(rdv: Object): Observable<Object> {
     return this.http.post(`${this.baseUrl}`, rdv);
  }

  updateRdv(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRdv(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRdvList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
