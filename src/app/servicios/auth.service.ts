import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { WebService } from './web.service';
import { UsuarioAPI } from '../models/usuarioapi.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //para mostrar el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Para mostrar el estado del login

  private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuario$ = this.usuarioSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // utiliza un tipo UsuarioAPI de models/UsuarioAPI.models.ts
  private usuarioCompletoSubject = new BehaviorSubject<UsuarioAPI>(null); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // Agregar un BehaviorSubject para el estado de loginFailed
  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
  loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación

  webservice = inject(WebService); // Obtener el servicio de webService
  async buscarBD4(usuario: string, clave: string){
    const url = 'https://670e7cbc3e7151861654bdf5.mockapi.io/'
    const res = await this.webservice.request('GET', url, 'users') as Array<UsuarioAPI>; // utiliza un tipo UsuarioAPI de models/UsuarioAPI.models.ts

    const user = res.find(u => u.user === usuario && u.pass === clave); // Buscar un usuario en la lista de usuarios de la API
    if (user) {
      console.log('Autenticación exitosa!');  // Autenticación exitosa!
      console.log(user);  // Nombre completo: Hel
      this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
      this.usuarioSubject.next(user.name); // Actualizar el nombre completo del usuario autenticado.
      this.usuarioCompletoSubject.next(user); // Actualizar el usuario completo como objeto del usuario autenticado.
      this.loginFailedSubject.next(false); // Restablecer loginFailed a false
    } else {
      this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
      this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
    }
  }

  async registrarNuevoUsuario(usuario: any) {
    const url = 'https://670e7cbc3e7151861654bdf5.mockapi.io/';
    try {
      const res = await this.webservice.request('POST', url, 'users', usuario);
      console.log('Usuario registrado con éxito', res);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error; // Propaga el error para manejarlo en el componente
    }
  }


  logout(): void {
    this.usuarioSubject.next('');  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  //
    this.usuarioCompletoSubject.next(null);
    this.isAuthenticatedSubject.next(false); // Desloguearse y desactivar el estado de autenticación.  // Desloguearse y
    this.loginFailedSubject.next(false);  // Restablecer loginFailed al cerrar sesión
  }

  isLoggedIn() {
    return this.isAuthenticated$; // Retornar el estado de autenticación
  }

}
