import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
})
export class DocenteComponent  implements OnInit {

  asignaturas = [
    { nombre: 'Programación en Python', id: 'INF101' },
    { nombre: 'Bases de Datos', id: 'INF102' },
    { nombre: 'Algoritmos y Estructuras de Datos', id: 'INF103' },
  ];

  constructor() { }

  ngOnInit() {}

}
