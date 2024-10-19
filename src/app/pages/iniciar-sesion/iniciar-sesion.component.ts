import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioAPI } from 'src/app/models/usuarioapi.models';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss'],
})
export class IniciarSesionComponent  implements OnInit {
  usuario: string = '';
  contra: string = '';
  mensaje: string = '';
  cargando: boolean = false;

  private authService = inject(AuthService);
  private router = inject(Router);
  private alertController = inject(AlertController);

  isAuthenticated: boolean;
  usuarioCompleto: UsuarioAPI;

  constructor() { }

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
    this.authService.usuarioCompleto$.subscribe(usuarioCompleto => this.usuarioCompleto = usuarioCompleto);
  }

  async inicioSesion(usuario: string, contra: string) {
    this.cargando = true;
    await this.authService.buscarUsuario(usuario, contra);

    if (this.isAuthenticated) {
      this.usuario = '';
      this.contra = '';
      if (this.usuarioCompleto.rol === "docente") {
        this.cargando = false;
        this.mensaje = 'Inicio de sesión exitoso.';
        await this.mostrarMensaje('Éxito', this.mensaje);
        this.router.navigate(['/docente']);
      }
      else{
        this.cargando = false;
        this.mensaje = 'Inicio de sesión exitoso.';
        await this.mostrarMensaje('Éxito', this.mensaje);
        this.router.navigate(['/alumno']);
      }
    } else {
      this.cargando = false;
      this.mensaje = 'usuario o contraseña incorrecto.';
      await this.mostrarMensaje('Error', this.mensaje);
    }

  }

  async mostrarMensaje(cabecera: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: cabecera,
      message: mensaje,
      buttons: ['Entendido']
    });
    await alert.present();
  }

}
