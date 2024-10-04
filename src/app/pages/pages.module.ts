import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IonicModule } from '@ionic/angular';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
    RegistrarComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
  ]
})
export class PagesModule { }
