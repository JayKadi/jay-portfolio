import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  fullText = "sudo apt-get install jay-kadi --full-stack";
  typedText = "";

  ngOnInit() {
    // Typing effect logic
    interval(100)
      .pipe(
        take(this.fullText.length),
        map(i => this.fullText.substring(0, i + 1))
      )
      .subscribe(val => this.typedText = val);
  }
}