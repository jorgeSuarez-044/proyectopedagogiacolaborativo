import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2 class="title">Temas del Proyecto</h2>

    <div class="temas-container">
      <ul>
        <li>
          <strong>Definición de objetivos pedagógicos:</strong>
          En Java básico, los objetivos deben ser claros y alcanzables. Por ejemplo:
          <ul>
            <li>Aprender a usar variables, estructuras de control y funciones en equipo.</li>
            <li>Desarrollar un programa simple entre compañeros (como una calculadora o menú interactivo).</li>
            <li>Fomentar la responsabilidad compartida en tareas de codificación.</li>
          </ul>
        </li>

        <li>
          <strong>Estrategias didácticas para el aprendizaje colaborativo:</strong>
          <ul>
            <li>Programación en parejas: dos estudiantes resuelven juntos un problema en Java.</li>
            <li>Proyectos simples en grupo: como un sistema de notas o agenda.</li>
            <li>División de tareas: uno escribe el código, otro lo prueba y otro lo documenta.</li>
            <li>Uso básico de <code>GitHub</code> para guardar y compartir el código.</li>
          </ul>
        </li>

        <li>
          <strong>Integración de tecnologías emergentes:</strong>
          <ul>
            <li>IDE colaborativos como <em>Jdoodle</em> o <em>CodeTogether</em> para programar en línea.</li>
            <li>Uso de asistentes IA como el consumo de openai para resolver dudas de Java.</li>
            <li>Videos interactivos o simuladores para aprender sintaxis de forma visual.</li>
          </ul>
        </li>

        <li>
          <strong>Evaluación y estándares de calidad:</strong>
          <ul>
            <li>Código limpio, comentado y funcional.</li>
            <li>Participación de todos los miembros del grupo.</li>
            <li>Listas de cotejo simples: ¿Funciona? ¿Está ordenado? ¿Participaron todos?</li>
            <li>Autoevaluaciones y coevaluaciones sencillas.</li>
          </ul>
        </li>
      </ul>
    </div>

    <hr />

    <!-- Resto de la sección de GitHub (ya mejorada) -->
    <section class="github-section">
      <h3>Guía básica para usar GitHub en proyectos Java</h3>
      <p>GitHub es una plataforma clave para colaborar y versionar proyectos. Aquí te dejo los pasos básicos para empezar:</p>
      <ol>
        <li><strong>Crear una cuenta en GitHub:</strong> 
          <a href="https://github.com/join" target="_blank" rel="noopener">https://github.com/join</a>
        </li>
        <li><strong>Crear un nuevo repositorio:</strong> Ingresa a tu cuenta, haz clic en <em>New Repository</em> y completa los datos.</li>
        <li><strong>Clonar el repositorio en tu PC:</strong>
          <pre><code>git clone https://github.com/tu-usuario/tu-repositorio.git</code></pre>
        </li>
        <li><strong>Crear un nuevo archivo o proyecto Java:</strong> Guarda tu código en la carpeta del repositorio.</li>
        <li><strong>Agregar los cambios al área de staging:</strong>
          <pre><code>git add .</code></pre>
        </li>
        <li><strong>Crear un commit con mensaje:</strong>
          <pre><code>git commit -m "Primer commit: agrego programa Java básico"</code></pre>
        </li>
        <li><strong>Enviar cambios al repositorio remoto (GitHub):</strong>
          <pre><code>git push origin main</code></pre>
        </li>
      </ol>
      <p>Con estos pasos ya puedes colaborar con tus compañeros y mantener un control de versiones efectivo.</p>
      <p>Para aprender más, visita la <a href="https://docs.github.com/es/get-started/quickstart" target="_blank" rel="noopener">Guía oficial de GitHub</a>.</p>
    </section>
  `,
  styles: [`
    .title {
      color: #27ae60;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin-bottom: 1rem;
      user-select: none;
      animation: fadeInDown 1s ease forwards;
    }

    .temas-container {
      background-color: #f9f9f9;
      border-left: 5px solid #2ecc71;
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 8px 20px rgba(46, 204, 113, 0.15);
      animation: slideInUp 1.2s ease both;
    }

    ul {
      font-size: 1.1rem;
      list-style-type: disc;
      padding-left: 1.5rem;
      margin-bottom: 1.5rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    ol {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 1rem;
      padding-left: 1.7rem;
      margin-bottom: 2rem;
      animation: fadeIn 1.3s ease forwards;
    }

    a {
      color: #2980b9;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    a:hover {
      color: #3498db;
      text-decoration: underline;
    }

    pre {
      background-color: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.95rem;
      overflow-x: auto;
      box-shadow: 0 0 12px #27ae60aa;
      margin: 0.5rem 0 1.2rem 0;
      user-select: all;
      animation: pulseGlow 3s ease-in-out infinite;
    }

    code {
      font-family: 'Courier New', Courier, monospace;
    }

    .github-section {
      background: #eafaf1;
      border-left: 6px solid #27ae60;
      padding: 1.5rem 1.8rem;
      border-radius: 12px;
      box-shadow: 0 6px 15px rgb(39 174 96 / 0.15);
      animation: slideInLeft 1s ease forwards;
    }

    .github-section h3 {
      color: #145214;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    @keyframes fadeInDown {
      0% { opacity: 0; transform: translateY(-20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes slideInLeft {
      0% { opacity: 0; transform: translateX(-30px); }
      100% { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 12px #27ae60aa; }
      50% { box-shadow: 0 0 20px #2ecc7188; }
    }
  `]
})
export class TemasComponent {}
