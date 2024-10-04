import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit, OnDestroy {

  usuario: string;
  private authService = inject(AuthService);

  subscriptionsAuthService: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscriptionsAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  ngOnDestroy() {
    this.subscriptionsAuthService?.unsubscribe();
  }

}
