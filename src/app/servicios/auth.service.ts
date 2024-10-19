import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { WebService } from './web.service';
import { UsuarioAPI } from '../models/usuarioapi.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<string>('');
  usuario$ = this.usuarioSubject.asObservable();

  private usuarioCompletoSubject = new BehaviorSubject<UsuarioAPI>(null);
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable();

  constructor() { }

  webservice = inject(WebService);
  async buscarUsuario(usuario: string, clave: string){
    const url = 'https://670e7cbc3e7151861654bdf5.mockapi.io/'
    const res = await this.webservice.request('GET', url, 'users') as Array<UsuarioAPI>;
    const user = res.find(u => u.user === usuario && u.pass === clave);
    if (user) {
      this.isAuthenticatedSubject.next(true);
      this.usuarioSubject.next(user.name);
      this.usuarioCompletoSubject.next(user);
    } else {
      this.isAuthenticatedSubject.next(false);
    }
  }


  async registrarUsuario(usuario: any) {
    const url = 'https://670e7cbc3e7151861654bdf5.mockapi.io/';
    try {
      const revisaUsuarios = await this.analizaUsuario();
      const usuarioExiste = revisaUsuarios.find(u => u.user === usuario.user);

      if (usuarioExiste) {
        throw new Error('El usuario ya está registrado, intenta con otro.');
      }

      const res = await this.webservice.request('POST', url, 'users', usuario);
    } catch (error) {
      throw error;
    }
  }

  async analizaUsuario(): Promise<UsuarioAPI[]> {
    const url = 'https://670e7cbc3e7151861654bdf5.mockapi.io/';
    try {
      const res = await this.webservice.request('GET', url, 'users') as Array<UsuarioAPI>;
      return res;
    } catch (error) {
      throw error;
    }
  }


  cerrarSesion(): void {
    this.usuarioSubject.next('');
    this.usuarioCompletoSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  isLoggedIn() {
    return this.isAuthenticated$;
  }

}
