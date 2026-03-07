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
  fullBio = "Jay Kadi — Full-stack Developer & IT Systems Architect. Bridging the gap between ICT infrastructure and modern web ecosystems. Currently building solutions that automate support and streamline digital commerce.";
  displayText = "";
  typingSpeed = 40;
  emailStatus = "jaykadi42@gmail.com";

  // 1. Ensure your data arrays are here
  projects = [
  { 
    title: 'ITKit — Knowledge Base', 
    description: 'Modern self-service IT portal reducing support tickets via intelligent search and real-time analytics.', 
    tech: ['React 18', 'Node.js', 'Supabase', 'PostgreSQL'],
    live: 'https://itkit.vercel.app',
    github: 'https://github.com/JayKadi' // Update with specific repo link if different
  },
  { 
    title: 'Kadi Thrift E-commerce', 
    description: 'Full-stack second-hand apparel platform with M-Pesa/Pesapal integration and Cloudinary media management.', 
    tech: ['Django REST', 'React', 'PostgreSQL', 'Cloudinary'],
    live: 'https://kadi-thrift.vercel.app',
    github: 'https://github.com/JayKadi'
  },
  { 
    title: 'Expense Tracker Pro', 
    description: 'Finance dashboard featuring JWT/Google OAuth, interactive Recharts data viz, and CSV exports.', 
    tech: ['Python', 'Django', 'Vite', 'Recharts'],
    live: 'https://expense-tracker-kappa-mocha.vercel.app',
    github: 'https://github.com/JayKadi'
  },
  { 
    title: 'Smart AI Calculator', 
    description: 'Voice-interactive calculator with scientific modes, unit conversion, and speech-to-text feedback.', 
    tech: ['Speech API', 'Framer Motion', 'React', 'LocalStorage'],
    live: 'https://calculator-react-project-five.vercel.app',
    github: 'https://github.com/JayKadi'
  }
];

  skills = [
  { name: 'TypeScript/Angular', level: 'Learning' },
  { name: 'React/Vite', level: 'Expert' },
  { name: 'Django/Node.js', level: 'Intermediate' },
  { name: 'PostgreSQL/Supabase', level: 'Advanced' },
  { name: 'Cloudinary/Pesapal', level: 'Integration' },
  { name: 'Vercel/Railway', level: 'DevOps' }
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
