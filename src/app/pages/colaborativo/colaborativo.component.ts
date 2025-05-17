import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaborativo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="intro">
      <h2>Aprendizaje Colaborativo en Entornos Digitales</h2>
      <p>¡Juega, aprende y colabora con tus compañeros en estos retos Java!</p>
    </section>

    <!-- Juego 1: Trivia -->
    <section class="game">
      <h3>🎯 Juego 1: Trivia Java</h3>
      <p>Responde las preguntas en equipo y acumula puntos.</p>
      <div *ngIf="triviaIndex < trivia.length">
        <p><strong>{{ trivia[triviaIndex].question }}</strong></p>
        <div *ngFor="let option of trivia[triviaIndex].options">
          <label>
            <input type="radio" name="trivia" [value]="option" [(ngModel)]="selectedAnswer">
            {{ option }}
          </label>
        </div>
        <button (click)="checkTriviaAnswer()">Enviar respuesta</button>
        <p *ngIf="triviaFeedback">{{ triviaFeedback }}</p>
      </div>
      <p *ngIf="triviaIndex >= trivia.length">Juego terminado. ¡Puntaje total: {{ triviaScore }}/{{ trivia.length }}!</p>
    </section>

    <!-- Juego 2: Matching -->
    <section class="game">
      <h3>🧠 Juego 2: Empareja los Conceptos</h3>
      <p>Une conceptos de Java con sus descripciones.</p>
      <div class="matching">
        <div class="left">
          <div *ngFor="let left of matchLeft; let i = index">
            {{ i + 1 }}. {{ left }}
          </div>
        </div>
        <div class="right">
          <div *ngFor="let right of matchRight; let i = index">
            <input [(ngModel)]="matchAnswers[i]" size="1" maxlength="1" /> → {{ right }}
          </div>
        </div>
        <button (click)="checkMatching()">Verificar respuestas</button>
        <p *ngIf="matchFeedback">{{ matchFeedback }}</p>
      </div>
    </section>

    <!-- Juego 3: Escribe el Código -->
    <section class="game">
      <h3>💻 Juego 3: Escribe el Código Java</h3>
      <p>Completa el siguiente código Java para imprimir "Hola Mundo" correctamente.</p>
      <textarea [(ngModel)]="javaCode" rows="5" cols="60"></textarea>
      <br>
      <button (click)="checkCode()">Evaluar</button>
      <p *ngIf="codeFeedback">{{ codeFeedback }}</p>
    </section>
  `,
  styles: [`
    section.intro {
      text-align: center;
      margin-bottom: 2rem;
    }
    section.game {
      margin: 2rem 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 1rem;
      background-color: #f9f5ff;
    }
    .matching {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
    }
    .left, .right {
      width: 45%;
    }
    textarea {
      font-family: monospace;
      width: 100%;
      max-width: 600px;
    }
    button {
      margin-top: 1rem;
      background-color: #8e44ad;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
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
