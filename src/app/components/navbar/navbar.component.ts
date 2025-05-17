import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="temas" routerLinkActive="active">Temas</a>
      <a routerLink="recursos" routerLinkActive="active">Recursos</a>
      <a routerLink="colaborativo" routerLinkActive="active">Colaborativo</a>
    </nav>
  `,
  styles: [`
    .navbar {
      background: #2c3e50;
      padding: 1rem;
      display: flex;
      gap: 1.5rem;
      font-weight: 600;
    }
    .navbar a {
      color: #ecf0f1;
      text-decoration: none;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    .navbar a.active,
    .navbar a:hover {
      background-color: #3498db;
      color: white;
    }
  `]
})
export class NavbarComponent {}
