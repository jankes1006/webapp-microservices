import {LoginUserDto} from './../dto/login-user-dto';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthDto} from "../dto/auth-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_ADDRESS: string = 'http://localhost:8763/auth';
  AUTH_TOKEN: string = 'auth_token';

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): void {
    this.http.post<AuthDto>(this.AUTH_ADDRESS, this.prepareLoginUserDto(username, password)).subscribe(response => {
      this.saveToken(response);
    });
  }

  private prepareLoginUserDto(username: string, password: string): LoginUserDto {
    return {
      'username': username ?? '',
      'password': password ?? ''
    }
  }

  private saveToken(authDto: AuthDto): void {
    const {token} = authDto;
    if (token) {
      localStorage.setItem(this.AUTH_TOKEN, token);
    }
  }

}
