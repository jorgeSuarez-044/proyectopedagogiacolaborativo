import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaborativo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="intro animate__animated animate__fadeInDown">
      <h2>🌐 Aprendizaje Colaborativo en Entornos Digitales</h2>
      <p>¡Juega, aprende y colabora con tus compañeros en estos retos Java!</p>
    </section>

    <!-- Juego 1: Trivia -->
    <section class="game animate__animated animate__fadeInUp">
      <h3>🎯 Juego 1: Trivia Java</h3>
      <p>Responde las preguntas en equipo y acumula puntos.</p>
      <div *ngIf="triviaIndex < trivia.length" class="trivia-box">
        <p><strong>{{ trivia[triviaIndex].question }}</strong></p>
        <div class="options">
          <label *ngFor="let option of trivia[triviaIndex].options" class="option">
            <input type="radio" name="trivia" [value]="option" [(ngModel)]="selectedAnswer">
            {{ option }}
          </label>
        </div>
        <button (click)="checkTriviaAnswer()">✅ Enviar respuesta</button>
        <p *ngIf="triviaFeedback" class="feedback">{{ triviaFeedback }}</p>
      </div>
      <p *ngIf="triviaIndex >= trivia.length" class="score">🎉 Juego terminado. ¡Puntaje total: {{ triviaScore }}/{{ trivia.length }}!</p>
    </section>

    <!-- Juego 2: Matching -->
    <section class="game animate__animated animate__fadeInUp animate__delay-1s">
      <h3>🧠 Juego 2: Empareja los Conceptos</h3>
      <p>Une conceptos de Java con sus descripciones.</p>
      <div class="matching">
        <div class="left">
          <div *ngFor="let left of matchLeft; let i = index" class="match-item">
            {{ i + 1 }}. {{ left }}
          </div>
        </div>
        <div class="right">
          <div *ngFor="let right of matchRight; let i = index" class="match-item">
            <input [(ngModel)]="matchAnswers[i]" size="1" maxlength="1" placeholder="A, B, C" /> → {{ right }}
          </div>
        </div>
      </div>
      <button (click)="checkMatching()">🔍 Verificar respuestas</button>
      <p *ngIf="matchFeedback" class="feedback">{{ matchFeedback }}</p>
    </section>

    <!-- Juego 3: Escribe el Código -->
    
    <section class="game animate__animated animate__fadeInUp animate__delay-2s">
      <h3>💻 Juego 3: Escribe el Código Java</h3>
      <p>Completa el siguiente código Java para imprimir "Hola Mundo" correctamente.</p>
<div class="code-container">
  <div class="code-header">
    <span>Ejemplo: Hola Mundo en Java</span>
    <button class="copy-button" (click)="copiarCodigo()">📋 Copiar</button>
  </div>

  <pre><code class="java">
public class HolaMundo {{ '{' }}
    public static void main(String[] args) {{ '{' }}
        System.out.println("Hola Mundo");
    {{ '}' }}
{{ '}' }}
  </code></pre>
</div>


      <textarea [(ngModel)]="javaCode" rows="5" cols="60" placeholder="Escribe aquí tu código Java..."></textarea>
      <br>
      <button (click)="checkCode()">🧪 Evaluar código</button>
      <p *ngIf="codeFeedback" class="feedback">{{ codeFeedback }}</p>
    </section>
  `,
  styles: [`
    /* Animaciones */
    @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

    section.intro {
      text-align: center;
      margin-bottom: 2rem;
      padding: 1rem;
      background-color: #e3f2fd;
      border-radius: 1rem;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
.code-container {
  background-color: #2d2d2d;
  color: #f8f8f2;
  font-family: 'Courier New', monospace;
  border-radius: 8px;
  padding: 1rem;
  position: relative;
  max-width: 100%;
  overflow-x: auto;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #a6e22e;
  font-weight: bold;
}

pre {
  margin: 0;
  white-space: pre;
  overflow-x: auto;
}

.copy-button {
  background-color: #66d9ef;
  color: #1b1e1f;
  border: none;
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.copy-button:hover {
  background-color: #5acde0;
}

    section.intro h2 {
      color: #2c3e50;
      font-size: 2rem;
    }

    section.game {
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 1rem;
      background: linear-gradient(145deg, #ffffff, #f1f1f1);
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      max-width: 800px;
    }

    section.game h3 {
      color: #6a1b9a;
      font-size: 1.5rem;
    }

    .options {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
    }

    .option {
      background-color: #f3e5f5;
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .option:hover {
      background-color: #ce93d8;
    }

    button {
      margin-top: 1rem;
      background-color: #6a1b9a;
      color: white;
      padding: 0.6rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    button:hover {
      transform: scale(1.05);
      background-color: #8e24aa;
    }

    .matching {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      padding: 1rem 0;
    }

    .left, .right {
      width: 45%;
    }

    .match-item {
      margin: 0.5rem 0;
      font-size: 1.1rem;
    }

    input[type="text"], textarea {
      font-family: monospace;
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      margin-top: 0.5rem;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    }

    .feedback {
      margin-top: 1rem;
      font-weight: bold;
      font-size: 1.1rem;
    }

    .feedback::before {
      content: "💡 ";
    }

    .score {
      font-size: 1.2rem;
      font-weight: bold;
      color: #2e7d32;
      margin-top: 1rem;
    }

    @media (max-width: 600px) {
      .matching {
        flex-direction: column;
      }

      .left, .right {
        width: 100%;
      }
    }
  `]
})
export class ColaborativoComponent {
  // Juego 1: Trivia
  trivia = [
    {
      question: '¿Qué palabra clave se usa para definir una clase en Java?',
      options: ['function', 'define', 'class', 'structure'],
      answer: 'class'
    },
    {
      question: '¿Cuál es el tipo de dato para números decimales en Java?',
      options: ['int', 'double', 'String', 'char'],
      answer: 'double'
    }
  ];
  triviaIndex = 0;
  selectedAnswer = '';
  triviaFeedback = '';
  triviaScore = 0;

  checkTriviaAnswer() {
    if (this.selectedAnswer === this.trivia[this.triviaIndex].answer) {
      this.triviaScore++;
      this.triviaFeedback = '✅ ¡Correcto!';
    } else {
      this.triviaFeedback = '❌ Incorrecto. La respuesta correcta era: ' + this.trivia[this.triviaIndex].answer;
    }
    setTimeout(() => {
      this.triviaIndex++;
      this.selectedAnswer = '';
      this.triviaFeedback = '';
    }, 1500);
  }
copiarCodigo() {
  const codigo = `
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
    }
}
  `;
  navigator.clipboard.writeText(codigo).then(() => {
    alert('Código copiado al portapapeles!');
  }).catch(err => {
    console.error('Error al copiar:', err);
  });
}

  // Juego 2: Matching
  matchLeft = ['Clase', 'Método', 'Variable'];
  matchRight = ['Bloque de código que realiza una acción', 'Almacena datos', 'Molde para crear objetos'];
  matchAnswers = ['', '', ''];
  matchFeedback = '';

  checkMatching() {
    const correct = ['C', 'A', 'B'];
    const isCorrect = this.matchAnswers.join('').toUpperCase() === correct.join('');
    this.matchFeedback = isCorrect ? '✅ ¡Todo correcto!' : '❌ Revisa las correspondencias.';
  }

  // Juego 3: Código Java
  javaCode = '';
  codeFeedback = '';

  checkCode() {
    const correctCode = `public class HolaMundo {\n    public static void main(String[] args) {\n        System.out.println("Hola Mundo");\n    }\n}`;
    this.codeFeedback = this.javaCode.trim() === correctCode.trim()
      ? '✅ ¡Código correcto!'
      : '❌ El código tiene errores. Intenta corregirlo.';
  }
}
