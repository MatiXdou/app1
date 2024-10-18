import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent  implements OnInit {

  asignaturas = [
    { nombre: 'DISEÑO Y GESTIÓN DE REQUISITOS', id: 'PRY1111' },
    { nombre: 'HABILIDADES BÁSICAS DE COMUNICACIÓN', id: 'PLC1101' },
    { nombre: 'INGLÉS BÁSICO I', id: 'INU1101' },
    { nombre: 'MODELAMIENTO DE BASE DE DATOS', id: 'MDY1131' },
    { nombre: 'NIVELACIÓN MATEMÁTICA', id: 'MAT1110' },
    { nombre: 'PROGRAMACIÓN DE ALGORITMOS', id: 'PGY1121' },
    { nombre: 'PROCESO DE PORTAFOLIO', id: 'APY4478' },
  ];

  constructor() { }

  ngOnInit() {}

}
