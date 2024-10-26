import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './pages/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    LoginComponent,
    RouterOutlet,
    UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
