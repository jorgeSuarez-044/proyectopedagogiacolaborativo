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
        <button (click)="toggleChat()">✖</button>
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
      bottom: 20px;
      left: 20px;
      width: 60px;
      height: 60px;
      background-color: #27ae60;
      color: white;
      font-size: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 9999;
      transition: transform 0.3s;
    }

    .floating-bubble img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .floating-bubble:hover {
      transform: scale(1.1);
    }

    /* Panel del chat */
    .chat-panel {
      position: fixed;
      bottom: 100px;
      left: 20px;
      width: 320px;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      display: flex;
      flex-direction: column;
      font-family: 'Segoe UI', sans-serif;
      z-index: 9999;
      max-height: 400px;
      overflow-y: auto;
    }

    /* Cabecera del chat */
    .chat-header {
      background: #27ae60;
      color: white;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    .chat-header button {
      background: transparent;
      color: white;
      border: none;
      font-size: 18px;
      cursor: pointer;
    }

    .chat-body {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow-y: auto;
      flex-grow: 1;
    }

    .chat-input {
      display: flex;
      gap: 8px;
      padding: 10px;
      border-top: 1px solid #ccc;
    }

    .chat-input input {
      flex-grow: 1;
      padding: 6px 10px;
      border-radius: 20px;
      border: 1px solid #27ae60;
      outline: none;
    }

    .chat-input button {
      background-color: #27ae60;
      color: white;
      border: none;
      border-radius: 20px;
      padding: 6px 12px;
      cursor: pointer;
    }

    /* Estilos de los mensajes */
    .bot {
      background-color: #e9fbe7;
      color: #145214;
      padding: 8px 12px;
      border-radius: 12px;
      align-self: flex-start;
      max-width: 80%;
    }

    .user {
      background-color: #d4edda;
      color: #145214;
      padding: 8px 12px;
      border-radius: 12px;
      align-self: flex-end;
      max-width: 80%;
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
