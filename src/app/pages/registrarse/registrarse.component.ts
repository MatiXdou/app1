import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss'],
})
export class RegistrarseComponent implements OnInit {
  usuario: string = '';
  clave: string = '';
  nombreCompleto: string = '';
  telefono: string = '';
  rol: string = 'alumno';

  private authService = inject(AuthService);
  private router = inject(Router);

  registroFallido: boolean = false;

  async registrar() {
    const Usuario = {
      user: this.usuario,
      pass: this.clave,
      name: this.nombreCompleto,
      phone: this.telefono,
      rol: this.rol
    };

    try {
      await this.authService.registrarUsuario(Usuario);
      this.usuario = '';
      this.clave = '';
      this.nombreCompleto = '';
      this.telefono = ''
      this.rol = 'alumno';
      this.router.navigate(['/iniciar-sesion']);
    } catch (error) {
      this.registroFallido = true;
    }
  }

  constructor() { }

  ngOnInit() { }

}
