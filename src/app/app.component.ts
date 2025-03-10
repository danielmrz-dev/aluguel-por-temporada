import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRegisterFormComponent } from "./components/user-register-form/user-register-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserRegisterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aluguel-por-temporada';
}
