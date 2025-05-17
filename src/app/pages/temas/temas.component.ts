import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Temas del Proyecto</h2>
    <ul>
      <li>Definición de objetivos pedagógicos</li>
      <li>Estrategias didácticas para el aprendizaje colaborativo</li>
      <li>Integración de tecnologías emergentes</li>
      <li>Evaluación y estándares de calidad</li>
    </ul>

    <hr />

    <h3>Asistente IA Leonardo</h3>

    <div class="chat-container">

      <!-- Mensaje Bot -->
      <div *ngIf="respuesta" class="message bot-message" unselectable="on" onselectstart="return false;" onmousedown="return false;">
        <img src="https://i.ibb.co/cXTLBwGZ/bot.png" alt="Bot Avatar" class="avatar" />
        <div class="bubble no-select">
          {{ respuesta }}
        </div>
      </div>

      <!-- Mensaje Usuario -->
      <div *ngIf="mensaje" class="message user-message">
        <div class="bubble">
          {{ mensaje }}
        </div>
      </div>

      <!-- Input y Botón -->
      <div class="input-area">
        <input
          [(ngModel)]="mensaje"
          placeholder="Escribe tu pregunta"
          (keyup.enter)="consultar()"
          autocomplete="off"
          spellcheck="false"
        />
        <button (click)="consultar()">Enviar</button>
      </div>
    </div>
  `,
  styles: [`
    /* Títulos */
    h2, h3 {
      color: #27ae60;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin-bottom: 1rem;
      user-select: none;
    }

    ul {
      font-size: 1.1rem;
      list-style-type: disc;
      padding-left: 1.5rem;
      margin-bottom: 1.5rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    /* Contenedor general del chat */
    .chat-container {
      max-width: 600px;
      background: #f0f4f7;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      padding: 1.5rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      user-select: none;
      min-height: 300px;
    }

    /* Cada mensaje */
    .message {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      transition: all 0.3s ease;
    }

    /* Mensaje del bot */
    .bot-message {
      flex-direction: row;
      justify-content: flex-start;
    }

    /* Mensaje del usuario */
    .user-message {
      flex-direction: row-reverse;
      justify-content: flex-end;
      user-select: text; /* usuario puede seleccionar */
    }

    /* Avatar bot con animación pulso */
    .avatar {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: transparent;
      animation: pulse 2.5s ease-in-out infinite;
      box-shadow: 0 0 8px #27ae60aa;
      user-select: none;
    }

    /* Animación pulsante */
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 8px #27ae60aa;
      }
      50% {
        transform: scale(1.1);
        box-shadow: 0 0 16px #27ae60dd;
      }
    }

    /* Burbuja de mensaje */
    .bubble {
      max-width: 75%;
      padding: 14px 20px;
      border-radius: 24px;
      font-size: 1rem;
      line-height: 1.4;
      white-space: pre-wrap;
      user-select: text;
      box-shadow: 0 2px 5px rgb(0 0 0 / 0.05);
      transition: background-color 0.3s ease;
    }

    /* Burbuja bot */
    .bot-message .bubble {
      background-color: #27ae60;
      color: white;
      border-bottom-left-radius: 0;
      user-select: none; /* no copiar texto del bot */
    }

    /* Burbuja usuario */
    .user-message .bubble {
      background-color: #d4edda;
      color: #145214;
      border-bottom-right-radius: 0;
    }

    /* Input + botón container */
    .input-area {
      display: flex;
      gap: 0.75rem;
      margin-top: auto;
    }

    /* Input texto */
    input {
      flex-grow: 1;
      padding: 0.7rem 1.2rem;
      font-size: 1rem;
      border: 2px solid #27ae60;
      border-radius: 25px;
      outline: none;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    input:focus {
      border-color: #2ecc71;
      box-shadow: 0 0 8px #2ecc71aa;
    }

    /* Botón enviar */
    button {
      background-color: #27ae60;
      color: white;
      border: none;
      border-radius: 25px;
      padding: 0 1.8rem;
      font-size: 1rem;
      cursor: pointer;
      font-weight: 600;
      transition: background-color 0.3s ease;
      box-shadow: 0 3px 6px rgba(0,0,0,0.15);
    }
    button:hover {
      background-color: #2ecc71;
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    }

    /* Clase para evitar selección de texto en el bot */
    .no-select {
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }
  `]
})
export class TemasComponent {
  mensaje: string = '';
  respuesta: string = '';

  private apiKey = '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';

  constructor(private http: HttpClient) {}

  consultar() {
    if (!this.mensaje.trim()) return;

    const url = 'https://openrouter.ai/api/v1/chat/completions';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
      'HTTP-Referer': 'http://localhost:4200',
      'X-Title': 'MiAsistenteEducativo'
    });

    const body = {
      model: 'openai/gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Eres un asistente educativo colaborativo.' },
        { role: 'user', content: this.mensaje }
      ]
    };

    this.http.post<any>(url, body, { headers }).subscribe({
      next: (data) => {
        this.respuesta = data.choices[0].message.content;
        this.speak(this.respuesta);
      },
      error: (err) => {
        console.error(err);
        this.respuesta = 'Error al consultar la IA.';
        this.speak(this.respuesta);
      }
    });
  }

  speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(voice => voice.lang === 'es-ES');
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }

    window.speechSynthesis.speak(utterance);
  }
}
