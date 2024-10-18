import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.scss'],
})
export class CerrarSesionComponent  implements OnInit {
  private authService = inject(AuthService);

  constructor() { }

  ngOnInit(): void {
    this.authService.logout();
  }

}
