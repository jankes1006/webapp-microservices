import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  AUTH_TOKEN: string  = 'auth_token';

  constructor(private http: HttpClient) { 
  }

  get(url: string): Observable<any> {
    return this.http.get(url, this.prepareHeaders());
  }

  post(url: string, body: any): Observable<any>{
    return this.http.post(url, body, this.prepareHeaders());
  }

  put(url: string, body: any): Observable<any>{
    return this.http.put(url, body, this.prepareHeaders());
  }

  delete(url: string): Observable<any>{
    return this.http.delete(url, this.prepareHeaders());
  }

  private prepareHeaders(): any {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return {headers: headers};
  }

  private getToken(): string {
    return localStorage.getItem(this.AUTH_TOKEN) ?? '';
  }

}
