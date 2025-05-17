import { Component } from '@angular/core';

@Component({
  selector: 'app-recursos',
  standalone: true,
  template: `
    <h2>Recursos Educativos</h2>
    <p>Aquí puedes incluir enlaces, videos y ejemplos de código embebidos para el aprendizaje.</p>

    <h3>Ejemplo de código Java básico</h3>
   <iframe
  src="https://www.jdoodle.com/ga/P85AbKYUvxXKoq3N7l%2B3kQ%3D%3D"
  width="100%"
  height="400"
  frameborder="0"
  allowfullscreen>
</iframe>

    <h3>Video explicativo</h3>
    <video width="100%" controls>
      <source src="https://ai.invideo.io/watch/1XanIMzEioz" type="video/mp4">
      Tu navegador no soporta la etiqueta de video.
    </video>
  `,
  styles: [`
    h2, h3 {
      color: #2980b9;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    iframe {
      border: 1px solid #ddd;
      border-radius: 6px;
      margin-bottom: 1rem;
    }
    video {
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0,0,0,0.15);
    }
  `]
})
export class RecursosComponent {}
