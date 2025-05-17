import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Bienvenido al Proyecto de Aprendizaje Colaborativo</h1>
    <p>Esta plataforma permite explorar temas, recursos y actividades enfocadas en aprendizaje colaborativo en entornos digitales.</p>
    <video width="100%" controls>
      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm">
      Tu navegador no soporta la etiqueta de video.
    </video>
  `,
  styles: [`
    h1 {
      color: #34495e;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    video {
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0,0,0,0.15);
    }
  `]
})
export class HomeComponent {}
