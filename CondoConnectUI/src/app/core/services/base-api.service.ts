import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {
  protected resourcePath: string;

  constructor(protected http: HttpClient, private entity: string = '') {
    this.resourcePath = environment.apiUrl;
  }

  protected get baseUrl(): string {
    return `${environment.apiUrl}/${this.resourcePath}`;
  }

  protected get headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl, { headers: this.headers });
  }

  public getById(id: string | number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`, { headers: this.headers });
  }

  public create(resource: Partial<T>): Observable<T> {
    return this.http.post<T>(this.baseUrl, resource, { headers: this.headers });
  }

  public update(id: string | number, resource: Partial<T>): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, resource, { headers: this.headers });
  }

  public delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers: this.headers });
  }

  public search(params: { [key: string]: string | number | boolean }): Observable<T[]> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined) {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get<T[]>(this.baseUrl, { headers: this.headers, params: httpParams });
  }
}
