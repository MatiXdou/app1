import { Component, OnInit, ViewChild, OnDestroy, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import QRious from 'qrious';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
})
export class DocenteComponent  implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  usuario: string;
  subscriptionAuthService: Subscription;
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
      this.selectedAsignaturaId = null; // Deselect if already selected
    } else {
      this.selectedAsignaturaId = asignaturaId; // Select new asignatura
    }
  }

  qrData: string = '';
  showQRCode: boolean = false;

  @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>;

  generarQR(asignaturaId: string) { // Generar la QR
    const fechaActual = new Date();
    // Formatear la fecha con guiones
    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11, por eso sumamos 1
    const día = String(fechaActual.getDate()).padStart(2, '0');

    // Concatenar la fecha y hora con el formato deseado
    const fecha = `${año}-${mes}-${día}`;
    this.qrData = `http://localhost:8100/asistencia/${asignaturaId}/${this.usuario}/${fecha}`;


    this.showQRCode = true; // Muestra el código QR
    this.createQR(); // Genera el código QR
    this.router.navigate(['/mostrar-qr']);
  }

  createQR() {
    const qr = new QRious({
      element: this.qrCanvas.nativeElement,
      value: this.qrData,
      size: 256, // Tamaño del QR
      level: 'M' // Nivel de corrección de errores
    });
  }

  constructor() { }

  ngOnInit() {
    this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario
      console.log('Docente:', usuario);
    });
  }

  ngOnDestroy() {
    this.subscriptionAuthService?.unsubscribe(); // Desuscribirse del observable del estado de autenticación
  }

}
