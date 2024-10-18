import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
})
export class DocenteComponent  implements OnInit {
  private router = inject(Router);

  asignaturas = [
    { nombre: 'DISEÑO Y GESTIÓN DE REQUISITOS', id: 'PRY1111' },
    { nombre: 'HABILIDADES BÁSICAS DE COMUNICACIÓN', id: 'PLC1101' },
    { nombre: 'INGLÉS BÁSICO I', id: 'INU1101' },
    { nombre: 'MODELAMIENTO DE BASE DE DATOS', id: 'MDY1131' },
    { nombre: 'NIVELACIÓN MATEMÁTICA', id: 'MAT1110' },
    { nombre: 'PROGRAMACIÓN DE ALGORITMOS', id: 'PGY1121' },
    { nombre: 'PROCESO DE PORTAFOLIO', id: 'APY4478' },
  ];

  selectedAsignaturaId: String | null = null;

  toggleQRButton(asignaturaId: String) {
    if (this.selectedAsignaturaId === asignaturaId) {
      this.selectedAsignaturaId = null;
    } else {
      this.selectedAsignaturaId = asignaturaId;
    }
  }

  qrData: string = '';
  showQRCode: boolean = false;

  irMostrarQR(asignaturaId: string){
    this.router.navigate([`/mostrar-qr/${asignaturaId}`]);
  }

  constructor() { }

  ngOnInit() {}

}
