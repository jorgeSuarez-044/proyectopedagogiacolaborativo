import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsistenteComponent } from './components/asistente/asistente.component';
import { HttpClientModule } from '@angular/common/http'; // 👈 IMPORTAR ESTO

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    AsistenteComponent,
    HttpClientModule // 👈 AÑADIR AQUÍ
  ],
  template: `
    <app-navbar></app-navbar>
     <app-asistente></app-asistente>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
   
  `,
  styles: [`
    .container {
      padding: 1rem 2rem;
    }
  `]
})
export class AppComponent {}
