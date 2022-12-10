import {Component, OnInit} from '@angular/core';
import {LoginUserDto} from "../../core/dto/login-user-dto";
import {AuthService} from "../../core/auth-service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  USERNAME_PLACEHOLDER: string = 'Login...';
  PASSWORD_PLACEHOLDER: string = 'Hasło...';
  LOGIN_BUTTON: string = 'Zaloguj się';
  RECOVER_PASSWORD: string = 'Odzyskaj hasło';

  model: LoginUserDto = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    const {username, password} = this.model;
    if (username && password) {
      this.authService.login(username, password);
    }
  }
}
