import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { PagNoEncontradaComponent } from './pag-no-encontrada/pag-no-encontrada.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { InicioComponent } from './inicio/inicio.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    AlumnoComponent,
    DocenteComponent,
    PagNoEncontradaComponent,
    IniciarSesionComponent,
    CerrarSesionComponent,
    RegistrarseComponent,
    AsistenciaComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CompartidoModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ]
})
export class PagesModule { }
