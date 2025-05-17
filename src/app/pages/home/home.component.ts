import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="home-container">
      <div class="glass-card animate-fade-in">
        <h1>Bienvenido al Proyecto de Aprendizaje Colaborativo</h1>
        <p>Explora temas, recursos y actividades centradas en el aprendizaje colaborativo en entornos digitales con Java.</p>
        <div class="image-wrapper">
          <a href="https://ibb.co/VYXRKdmq" target="_blank">
            <img src="https://i.ibb.co/1GH1S36m/javacode.png" alt="javacode">
          </a>
        </div>
      </div>
      <iframe 
  src="https://prezi.com/view/J5U1cdZshVLK7QkuYRyO/embed" 
  width="960" 
  height="600" 
  frameborder="0" 
  allowfullscreen 
  allow="autoplay; fullscreen; vr"
  style="max-width: 100%; border: none;">
</iframe>

    </section>
    
  `,
  styles: [`
    .home-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 90vh;
      background: linear-gradient(135deg, #e0f7fa, #fffde7);
      padding: 2rem;
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 16px;
      padding: 2rem 2.5rem;
      box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      text-align: center;
      max-width: 700px;
      width: 100%;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
      font-size: 2rem;
      font-weight: 700;
    }

    p {
      font-size: 1.1rem;
      color: #34495e;
      margin-bottom: 1.5rem;
    }

    .image-wrapper img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .image-wrapper img:hover {
      transform: scale(1.03);
      box-shadow: 0 6px 30px rgba(0,0,0,0.2);
    }

    /* Animaciones */
    .animate-fade-in {
      opacity: 0;
      animation: fadeIn 1.2s ease forwards;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  `]
})
export class HomeComponent {}
