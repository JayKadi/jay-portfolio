import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Needed for typing effects

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  projects = [
    {
      title: 'E-Commerce Engine',
      description: 'A high-performance shop built with Angular and Stripe integration.',
      tech: ['Angular', 'Tailwind', 'Node.js'],
      link: '#'
    },
    {
      title: 'AI Chat Dashboard',
      description: 'Real-time interface for interacting with LLMs using WebSockets.',
      tech: ['TypeScript', 'Firebase', 'OpenAI'],
      link: '#'
    },
    {
      title: 'Crypto Tracker',
      description: 'Live data visualization for digital assets with custom alerts.',
      tech: ['RxJS', 'D3.js', 'API'],
      link: '#'
    }
  ];
  skills = [
  { name: 'Angular', level: 'Expert', color: 'text-red-500' },
  { name: 'TypeScript', level: 'Advanced', color: 'text-blue-500' },
  { name: 'Tailwind CSS', level: 'Expert', color: 'text-cyan-400' },
  { name: 'Node.js', level: 'Intermediate', color: 'text-green-500' },
  { name: 'PostgreSQL', level: 'Intermediate', color: 'text-indigo-400' },
  { name: 'Firebase', level: 'Advanced', color: 'text-yellow-500' },
  { name: 'Git', level: 'Expert', color: 'text-orange-600' }
];
  fullBio = "Jay Kadi — Full-stack Developer & Creative Architect. Building digital experiences with Angular, Tailwind, and a touch of wit.";
  displayText = "";
  typingSpeed = 40; // milliseconds per character

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    let i = 0;
    const interval = setInterval(() => {
      if (i < this.fullBio.length) {
        this.displayText += this.fullBio.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }
}