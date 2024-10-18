import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss'],
})
export class IniciarSesionComponent  implements OnInit {

  usuario: string = '';
  clave: string = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean;

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed);
  }

  constructor() { }

  isLoading: boolean = false;
  async login(usuario: string, clave: string) {
    this.isLoading = true;
    await this.authService.buscarBD4(usuario, clave);
    this.isLoading = false;

    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
        if (isAuthenticated) {
          this.usuario = '';
          this.clave = '';
          if (usuarioCompleto.rol === "docente") {
            this.usuario = '';
            this.clave = '';
            this.router.navigate(['/docente']);
          }
          else{
            this.usuario = '';
            this.clave = '';
            this.router.navigate(['/alumno']);
          }
        } else {
          this.loginFailed = true;
        }
      });
    });

  }

}
