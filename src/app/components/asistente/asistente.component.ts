import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asistente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Burbuja flotante con imagen -->
    <div class="floating-bubble" (click)="toggleChat()" title="Asistente IA Leonardo 🤖">
      <img src="https://i.ibb.co/cXTLBwGZ/bot.png" alt="Asistente IA" />
    </div>

    <!-- Panel del chat -->
    <div class="chat-panel" *ngIf="mostrar">
      <div class="chat-header">
        <strong>Leonardo IA</strong>
        <button (click)="toggleChat()" aria-label="Cerrar chat">✖</button>
      </div>

      <div class="chat-body">
        <div *ngIf="respuesta" class="bot">{{ respuesta }}</div>
        <div *ngIf="mensaje" class="user">{{ mensaje }}</div>
      </div>

      <div class="chat-input">
        <input [(ngModel)]="mensaje" (keyup.enter)="consultar()" placeholder="Tu pregunta..." />
        <button (click)="consultar()">Enviar</button>
      </div>
    </div>
  `,
  styles: [`
    /* Burbuja flotante */
    .floating-bubble {
      position: fixed;
      bottom: 24px;
      left: 24px;
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #27ae60, #2ecc71);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow:
        0 0 8px #27ae60aa,
        0 0 20px #2ecc71cc,
        0 0 40px #27ae60dd;
      z-index: 9999;
      transition: transform 0.3s ease-in-out;
      animation: pulseGlow 2.5s infinite alternate ease-in-out;
    }

    .floating-bubble:hover {
      transform: scale(1.15) rotate(10deg);
      box-shadow:
        0 0 12px #2ecc71ff,
        0 0 28px #27ae60ff,
        0 0 50px #2ecc71ff;
    }

    .floating-bubble img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      user-select: none;
      pointer-events: none;
    }

    @keyframes pulseGlow {
      0% {
        box-shadow:
          0 0 8px #27ae60aa,
          0 0 20px #2ecc71cc,
          0 0 40px #27ae60dd;
        transform: scale(1);
      }
      50% {
        box-shadow:
          0 0 16px #2ecc71ff,
          0 0 30px #27ae60ff,
          0 0 60px #2ecc71ff;
        transform: scale(1.1) rotate(5deg);
      }
      100% {
        box-shadow:
          0 0 8px #27ae60aa,
          0 0 20px #2ecc71cc,
          0 0 40px #27ae60dd;
        transform: scale(1);
      }
    }

    /* Panel del chat */
    .chat-panel {
      position: fixed;
      bottom: 120px;
      left: 24px;
      width: 360px;
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.25);
      display: flex;
      flex-direction: column;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      z-index: 9999;
      max-height: 420px;
      overflow: hidden;
    }

    /* Cabecera del chat */
    .chat-header {
      background: linear-gradient(90deg, #27ae60, #2ecc71);
      color: white;
      padding: 14px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top-left-radius: 14px;
      border-top-right-radius: 14px;
      font-weight: 700;
      user-select: none;
    }

    .chat-header button {
      background: transparent;
      color: white;
      border: none;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    .chat-header button:hover {
      color: #d4edda;
    }

    .chat-body {
      padding: 16px 18px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      overflow-y: auto;
      flex-grow: 1;
      scrollbar-width: thin;
      scrollbar-color: #27ae60 #e0e0e0;
    }
    .chat-body::-webkit-scrollbar {
      width: 8px;
    }
    .chat-body::-webkit-scrollbar-thumb {
      background-color: #27ae60;
      border-radius: 10px;
    }

    .chat-input {
      display: flex;
      gap: 10px;
      padding: 14px 18px;
      border-top: 1px solid #eee;
      background: #fafafa;
    }

    .chat-input input {
      flex-grow: 1;
      padding: 8px 14px;
      border-radius: 25px;
      border: 2px solid #27ae60;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.3s ease;
    }
    .chat-input input:focus {
      border-color: #2ecc71;
      box-shadow: 0 0 8px #2ecc71aa;
    }

    .chat-input button {
      background-color: #27ae60;
      color: white;
      border: none;
      border-radius: 25px;
      padding: 8px 18px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 3px 8px rgba(39, 174, 96, 0.6);
    }
    .chat-input button:hover {
      background-color: #2ecc71;
      box-shadow: 0 5px 15px rgba(46, 204, 113, 0.8);
    }

    /* Estilos de los mensajes */
    .bot {
      background-color: #e9fbe7;
      color: #145214;
      padding: 12px 16px;
      border-radius: 16px 16px 16px 4px;
      align-self: flex-start;
      max-width: 80%;
      box-shadow: 0 2px 6px rgba(20, 82, 20, 0.2);
      font-size: 0.95rem;
      line-height: 1.3;
      user-select: text;
    }

    .user {
      background-color: #d4edda;
      color: #145214;
      padding: 12px 16px;
      border-radius: 16px 16px 4px 16px;
      align-self: flex-end;
      max-width: 80%;
      box-shadow: 0 2px 6px rgba(20, 82, 20, 0.3);
      font-size: 0.95rem;
      line-height: 1.3;
      user-select: text;
    }
  `]
})
export class AsistenteComponent {
  mensaje: string = '';
  respuesta: string = '';
  mostrar: boolean = false;

  private apiKey = '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';

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.mostrar = !this.mostrar;
  }

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
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(v => v.lang === 'es-ES');
    if (spanishVoice) utterance.voice = spanishVoice;
    window.speechSynthesis.speak(utterance);
  }
}
