import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { authGuard } from '../guard/auth.guard';
import { redirectIfAuthGuard } from '../guard/redirect-if-auth.guard';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { PagNoEncontradaComponent } from './pag-no-encontrada/pag-no-encontrada.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { MostrarQrComponent } from './mostrar-qr/mostrar-qr.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '', component: IniciarSesionComponent},
  {path: 'alumno', component: AlumnoComponent, canActivate: [authGuard]},
  {path: 'docente', component: DocenteComponent, canActivate: [authGuard]},
  {path: 'pagina-no-encontrada', component: PagNoEncontradaComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent, canActivate: [redirectIfAuthGuard]},
  {path: 'cerrar-sesion', component: CerrarSesionComponent, canActivate: [authGuard]},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'asistencia/:codigo/:usuario/:fecha', component: AsistenciaComponent},
  {path: 'mostrar-qr/:id/:nombre', component: MostrarQrComponent, canActivate: [authGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
