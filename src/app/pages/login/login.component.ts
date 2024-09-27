import { Router } from '@angular/router';
import { AuthService } from './../../servicios/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  usuario: string ='';
  clave: string ='';

  private authService = inject(AuthService);
  private router = inject(Router);

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean;

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed);
  }

  constructor() { }

  login(usuario: string, clave: string): void {
    this.authService.buscarBD(usuario, clave);

    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.usuario = '';
        this.clave = '';
        this.router.navigate(['/home']);
      } else {
        this.loginFailed = true;
      }
    });
  }

}
