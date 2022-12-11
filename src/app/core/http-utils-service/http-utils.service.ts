import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  AUTH_TOKEN: string = 'auth_token';

  constructor(private http: HttpClient) {
  }

  public get(url: string): Observable<any> {
    return this.http.get(url, this.prepareHeaders());
  }

  public post(url: string, body: any): Observable<any> {
    return this.http.post(url, body, this.prepareHeaders());
  }

  public put(url: string, body: any): Observable<any> {
    return this.http.put(url, body, this.prepareHeaders());
  }

  public delete(url: string): Observable<any> {
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
