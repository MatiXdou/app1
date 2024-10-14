import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent  implements OnInit {

  asignaturas = [
    { nombre: 'Programación en Python', codigo: 'INF101' },
    { nombre: 'Bases de Datos', codigo: 'INF102' },
    { nombre: 'Algoritmos y Estructuras de Datos', codigo: 'INF103' },
  ];

  constructor() { }

  ngOnInit() {}

}
