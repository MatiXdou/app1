import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent  implements OnInit {
  nombre: string;
  DatosPersonales = inject(DatosPersonalesService);

  constructor() { }

  ngOnInit() {
    this.nombre = this.DatosPersonales.getNombre();
  }



}
