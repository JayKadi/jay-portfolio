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