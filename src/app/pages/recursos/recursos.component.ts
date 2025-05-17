import { Component } from '@angular/core';

@Component({
  selector: 'app-recursos',
  standalone: true,
  template: `
    <section class="recursos-container">
      <h2 class="fade-in">📚 Recursos Educativos</h2>

      <div class="logo-container zoom-in">
        <img
          src="https://w7.pngwing.com/pngs/804/335/png-transparent-eclipse-android-java-source-code-eclipse-blue-sphere-electric-blue.png"
          alt="Logo Eclipse Android Java"
          class="eclipse-logo"
        />
      </div>

      <div class="card fade-in">
        <h2>🧑‍💻 Descarga e instalación de Eclipse IDE para programar en Java</h2>
        <p>Puedes descargar Eclipse IDE desde el siguiente enlace oficial:</p>
        <p>
          🔗 <a href="https://eclipseide.org/" target="_blank">https://eclipseide.org/</a>
        </p>

        <h3>✅ Pasos para instalar Eclipse IDE:</h3>
        <ol>
          <li>Haz clic en <strong>"Download"</strong>.</li>
          <li>Selecciona <strong>"Eclipse IDE for Java Developers"</strong>.</li>
          <li>Descarga el instalador para tu sistema operativo.</li>
          <li>Ejecuta e instala Eclipse.</li>
          <li>Lanza el IDE y empieza a trabajar.</li>
        </ol>

        <h3>☕ Instala también el JDK (Java Development Kit)</h3>
        <p>Descárgalo desde Oracle aquí:</p>
        <p>
          🔗 <a href="https://www.oracle.com/java/technologies/javase-downloads.html" target="_blank">
            https://www.oracle.com/java/technologies/javase-downloads.html
          </a>
        </p>

        <h3>✅ Pasos para instalar el JDK:</h3>
        <ol>
          <li>Selecciona la última versión de Java SE.</li>
          <li>Descarga e instala según tu sistema operativo.</li>
          <li>Configura la variable de entorno <code>JAVA_HOME</code>.</li>
        </ol>
        <p>Con esto estás listo para programar en Java con Eclipse 🚀</p>
      </div>
            <div class="card fade-in">
        <h3>🔧 Instalación de Git</h3>
        <p>Git es una herramienta esencial para el control de versiones y trabajo colaborativo en proyectos de programación.</p>

        <p>Puedes descargar Git desde su sitio oficial:</p>
        <p>
          🔗 <a href="https://git-scm.com/downloads" target="_blank">https://git-scm.com/downloads</a>
        </p>

        <h4>✅ Pasos para instalar Git:</h4>
        <ol>
          <li>Ingresa al enlace anterior y selecciona tu sistema operativo (Windows, macOS o Linux).</li>
          <li>Descarga el instalador y ejecútalo.</li>
          <li>Sigue los pasos del asistente de instalación dejando las opciones por defecto.</li>
          <li>Una vez instalado, abre una terminal y ejecuta <code>git --version</code> para verificar que está funcionando.</li>
        </ol>

        <p>Con Git instalado, podrás clonar repositorios, guardar versiones de tu código y colaborar con otros fácilmente.</p>
      </div>


      <div class="card fade-in">
        <h3>💻 Probar código Java online</h3>
        <p>En esta sección puedes probar tus métodos Java sin instalar nada:</p>
        <iframe
          src="https://www.jdoodle.com/ia/1HhK"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>

      <div class="card fade-in">
        <h3>🎥 Video explicativo</h3>
        <iframe
          src="https://ai.invideo.io/watch/1XanIMzEioz"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </section>
  `,
  styles: [`
    .recursos-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #2c3e50;
    }

    .logo-container {
      display: flex;
      justify-content: center;
      margin: 1rem 0;
    }

    .eclipse-logo {
      width: 130px;
      clip-path: circle(45% at 50% 50%);
      transition: transform 0.4s ease;
    }

    .eclipse-logo:hover {
      transform: scale(1.1) rotate(5deg);
    }

    .card {
      background-color: #fdfdfd;
      border-radius: 12px;
      padding: 1.5rem;
      margin-top: 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-4px);
    }

    h2, h3 {
      color: #2980b9;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    p, li {
      font-size: 1rem;
      line-height: 1.6;
    }

    a {
      color: #2c82c9;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    iframe {
      border-radius: 10px;
      width: 100%;
      margin-top: 1rem;
      border: 1px solid #ccc;
    }

    /* Animaciones */
    .fade-in {
      opacity: 0;
      animation: fadeIn 1s ease forwards;
    }

    .zoom-in {
      transform: scale(0.8);
      opacity: 0;
      animation: zoomIn 0.8s ease-out forwards;
    }

    @keyframes fadeIn {
      to { opacity: 1; }
    }

    @keyframes zoomIn {
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      .recursos-container {
        padding: 1rem;
      }

      .eclipse-logo {
        width: 100px;
      }
    }
  `]
})
export class RecursosComponent {}
