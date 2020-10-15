import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private baseUrl = 'http://localhost:8080/crfilmt-app/api/v1/factures';

  constructor(private http: HttpClient) { }

  getFacture(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFacture(patient: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, patient);
  }

  updateFacture(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFacture(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFactureList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
