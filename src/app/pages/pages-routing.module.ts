import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { authGuard } from '../guard/auth.guard';
import { redirectIfAuthGuard } from '../guard/redirect-if-auth.guard';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alumno', component: AlumnoComponent, canActivate: [authGuard]},
  {path: 'docente', component: DocenteComponent, canActivate: [authGuard]},
  {path: 'not-found', component: NotFoundComponent, canActivate: [redirectIfAuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [authGuard]},
  {path: 'registrar', component: RegistrarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
