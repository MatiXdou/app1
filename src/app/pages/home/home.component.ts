import { Component, inject,OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  nombre: string;
  DatosPersonales = inject(DatosPersonalesService);

  constructor() { }

  ngOnInit() { }

  guardarNombre(){
    this.DatosPersonales.setNombre(this.nombre);
    console.log("Nombre Guardado: " + this.nombre);
  }

}
