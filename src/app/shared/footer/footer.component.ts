import { Component, inject, OnInit } from '@angular/core';
import { UsuarioAPI } from 'src/app/models/UsuarioAPI.models';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  usuario: string;
  private authService = inject(AuthService);

  usuarioCompleto: UsuarioAPI;

  constructor() { }

  ngOnInit() {
    this.authService.usuario$.subscribe(usuario => { this.usuario = usuario; });

    this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
      this.usuarioCompleto = usuarioCompleto;
    });

  }

}
