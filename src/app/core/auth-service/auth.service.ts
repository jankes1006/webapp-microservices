import {LoginUserDto} from './../dto/login-user-dto';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthDto} from "../dto/auth-dto";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_ADDRESS: string = 'http://localhost:8763/auth';
  AUTH_TOKEN: string = 'auth_token';
  LOGIN_SUCCESS: string = 'Zalogowano się jako: '
  BAD_USERNAME_OR_PASSWORD: string = 'Podano nieprawidłowy login lub hasło!';
  REQUIRED_USERNAME_AND_PASSWORD: string = 'Do zalogowania się należy podać login oraz hasło!';

  constructor(private http: HttpClient, private toastrService: ToastrService) {
  }

  public login(username?: string, password?: string): void {
    if (!this.isValidUsernameAndPassword(username, password)) {
      return;
    }
    this.http.post<AuthDto>(this.AUTH_ADDRESS, this.prepareLoginUserDto(username!, password!)).subscribe(response => {
      this.toastrService.success(`${this.LOGIN_SUCCESS}${username}`)
      this.saveToken(response);
    }, error => {
      this.toastrService.error(`${this.BAD_USERNAME_OR_PASSWORD}`)
    });
  }

  private isValidUsernameAndPassword(username?: string, password?: string): boolean {
    if (username && password) {
      return true;
    }
    this.toastrService.warning(this.REQUIRED_USERNAME_AND_PASSWORD);
    return false;
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
