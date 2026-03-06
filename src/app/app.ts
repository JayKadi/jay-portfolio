import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  fullBio = "Jay Kadi — Full-stack Developer & Creative Architect. Building digital experiences with Angular, Tailwind, and a touch of wit.";
  displayText = "";
  typingSpeed = 40;
  emailStatus = "jaykadi42@gmail.com";

  // 1. Ensure your data arrays are here
  projects = [
    { title: 'E-Commerce Engine', description: 'Built with Angular & Stripe.', tech: ['Angular', 'Node.js'], link: '#' },
    { title: 'AI Dashboard', description: 'Real-time LLM interface.', tech: ['TypeScript', 'OpenAI'], link: '#' }
  ];

  skills = [
    { name: 'Angular', level: 'Expert' },
    { name: 'TypeScript', level: 'Advanced' }
  ];
  // 2. The function that uses that variable
  copyEmail() {
    navigator.clipboard.writeText('jaykadi42@gmail.com');
    
    // This line was causing the error because 'emailStatus' wasn't declared above
    this.emailStatus = "COPIED TO CLIPBOARD!"; 
    
    setTimeout(() => {
      this.emailStatus = "jaykadi42@gmail.com";
    }, 2000);
  }

  ngOnInit() {
    this.typeEffect();
  }

  // 2. Add the scrollTo method inside the class
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // 3. Add the handleCommand method for the terminal
  handleCommand(command: string) {
    const cmd = command.toLowerCase().trim();
    if (cmd === 'projects') {
      this.scrollTo('projects');
    } else if (cmd === 'clear') {
      this.displayText = '';
    }
    // Add more commands as you like!
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
