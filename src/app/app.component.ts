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

<footer class="footer">
  <p>Materia: Innovación Educativa y las TIC - Autor: Jorge Leonardo Suárez</p>
</footer>

   
  `,
 styles: [`
  .container {
    padding: 1rem 2rem;
  }

  .footer {
    background-color: #27ae60;
    color: white;
    text-align: center;
    padding: 1rem 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: fixed;
    width: 100%;
    bottom: 0;
    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.2);
    user-select: none;
    font-weight: 600;

    
    opacity: 0;
    transform: translateY(100%);
    animation: slideUpFadeIn 0.8s forwards ease-in-out;
  }

  @keyframes slideUpFadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`]

})
export class AppComponent {}
