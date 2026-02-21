import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // Add RouterLink here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Add it here too
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = signal('jay-portfolio'); // Modern Angular uses signals!
}
