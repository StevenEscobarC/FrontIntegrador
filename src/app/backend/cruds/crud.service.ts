import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private baseUrl = 'http://127.0.0.1:5000'; 

  constructor(private http: HttpClient) { }

  getAll<T>(endpoint: string): Observable<T[]> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<T[]>(url);
  }

  create<T>(endpoint: string, data: T): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.post<T>(url, data);
  }

  update<T>(endpoint: string, id: number, data: T): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}/${id}`;
    return this.http.put<T>(url, data);
  }

  delete(endpoint: string, id: number): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}/${id}`;
    return this.http.delete(url);
  }
}
