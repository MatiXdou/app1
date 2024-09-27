import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit, OnDestroy {
  nombre: string;
  datosPersonales = inject(DatosPersonalesService);

  usuario: string;
  private authService = inject(AuthService);

  subscriptionsDatosPersonales: Subscription;
  subscriptionsAuthService: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscriptionsDatosPersonales = this.datosPersonales.nombre$.subscribe(datosPersonales => {
      this.nombre = datosPersonales;
    });

    this.subscriptionsAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  ngOnDestroy() {
    this.subscriptionsDatosPersonales?.unsubscribe();
    this.subscriptionsAuthService?.unsubscribe();
  }

}
