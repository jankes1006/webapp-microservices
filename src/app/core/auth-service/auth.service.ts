import { AuthDto } from './../dto/auth-dto';
import { LoginUserDto } from './../dto/login-user-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_ADDRESS = 'http://localhost:8763/auth';
  AUTH_TOKEN: string  = 'auth_token';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): void {
    this.http.post(this.AUTH_ADDRESS, this.prepareLoginUserDto(username, password)).subscribe(response=>{
      this.saveToken(response);
    });
  }

  prepareLoginUserDto(username: string, password: string): LoginUserDto {
    return {
      'username': username,
      'password': password
    }
  }

  saveToken(authDto: any): void{
    var auth: AuthDto = authDto;
    localStorage.setItem(this.AUTH_TOKEN, auth.token);
  }

}
