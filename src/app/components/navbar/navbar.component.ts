import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" aria-label="Main navigation">
      <a
        routerLink=""
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        tabindex="0"
        (mouseenter)="speakText('Home')"
        (focus)="speakText('Home')"
      >Home</a>
      <a
        routerLink="temas"
        routerLinkActive="active"
        tabindex="0"
        (mouseenter)="speakText('Temas')"
        (focus)="speakText('Temas')"
      >Temas</a>
      <a
        routerLink="recursos"
        routerLinkActive="active"
        tabindex="0"
        (mouseenter)="speakText('Recursos')"
        (focus)="speakText('Recursos')"
      >Recursos</a>
      <a
        routerLink="colaborativo"
        routerLinkActive="active"
        tabindex="0"
        (mouseenter)="speakText('Colaborativo')"
        (focus)="speakText('Colaborativo')"
      >Colaborativo</a>
    </nav>
  `,
  styles: [`
    /* Tus estilos sin cambios */
    .navbar {
      background: rgba(20, 20, 30, 0.8);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 14px;
      padding: 1rem 2rem;
      display: flex;
      gap: 2.5rem;
      justify-content: center;
      align-items: center;
      box-shadow:
        0 4px 30px rgba(0, 0, 0, 0.7),
        inset 0 0 10px rgba(255, 255, 255, 0.05);
      font-weight: 700;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      user-select: none;
    }

    .navbar a {
      position: relative;
      color: #d0d9ff;
      text-decoration: none;
      padding: 0.65rem 1.8rem;
      border-radius: 20px;
      font-size: 1.15rem;
      transition: all 0.35s ease;
      box-shadow:
        0 6px 12px rgba(38, 38, 70, 0.5),
        0 0 12px rgba(58, 58, 112, 0.3);
      background: linear-gradient(145deg, rgba(30, 30, 60, 0.6), rgba(20, 20, 40, 0.8));
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      cursor: pointer;
      overflow: hidden;
      z-index: 0;
      user-select: none;
      outline-offset: 3px;
    }

    .navbar a::before {
      content: '';
      position: absolute;
      top: -60%;
      left: -60%;
      width: 220%;
      height: 220%;
      background: linear-gradient(45deg, #6e42f5, #2a7bff, #6e42f5, #2a7bff);
      background-size: 400% 400%;
      filter: blur(20px);
      opacity: 0;
      transition: opacity 0.4s ease;
      animation: glowDark 12s linear infinite;
      border-radius: 20px;
      z-index: -1;
    }

    .navbar a:hover::before,
    .navbar a.active::before {
      opacity: 1;
    }

    .navbar a:hover,
    .navbar a.active {
      color: #ffffff;
      box-shadow:
        0 0 15px #6e42f5,
        0 0 25px #2a7bff;
      background: linear-gradient(145deg, rgba(110, 66, 245, 0.8), rgba(42, 123, 255, 0.7));
      text-shadow:
        0 0 10px #6e42f5,
        0 0 15px #2a7bff;
      transform: translateY(-4px) scale(1.07);
      user-select: text;
    }

    @keyframes glowDark {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `]
})
export class NavbarComponent {
  speakText(text: string) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      if (synth.speaking) {
        synth.cancel();
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES'; // Cambiar a 'en-US' si quieres inglés
      synth.speak(utterance);
    }
  }
}
