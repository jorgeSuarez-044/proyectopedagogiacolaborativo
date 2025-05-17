import { Component } from '@angular/core';

@Component({
  selector: 'app-temas',
  standalone: true,
  template: `
    <h2>Temas del Proyecto</h2>
    <ul>
      <li>Definición de objetivos pedagógicos</li>
      <li>Estrategias didácticas para el aprendizaje colaborativo</li>
      <li>Integración de tecnologías emergentes</li>
      <li>Evaluación y estándares de calidad</li>
    </ul>
  `,
  styles: [`
    h2 {
      color: #27ae60;
      margin-bottom: 1rem;
    }
    ul {
      font-size: 1.1rem;
      list-style-type: disc;
      padding-left: 1.5rem;
    }
  `]
})
export class TemasComponent {}
