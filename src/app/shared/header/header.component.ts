import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  nombre: string;
  datosPersonales = inject(DatosPersonalesService);
  subscriptionsDatosPersonales: Subscription;


  constructor() { }

  ngOnInit() {
    this.subscriptionsDatosPersonales = this.datosPersonales.nombre$.subscribe(datosPersonales => {
      this.nombre = datosPersonales;
    });
  }

}
