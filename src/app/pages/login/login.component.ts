import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDivider } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Router, CanActivate } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatDivider,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService, 
    private router: Router,
  ) {}

  public name: string = '';
  public password: string = '';
  public admin: boolean = false;
  public userValid: boolean = false;
  public modalError: boolean = false;

  async onSubmit() {
    const UserAprove = await this.consultCredentials(this.name, this.password);
  }

  async consultCredentials(name: string, password: string) {
    this.loginService.authenticateUser(name, password).subscribe(
      (data) => {
        console.log(data);
        if(!data.token){
          this.userValid = false;
          this.modalError = true;
          return;
        } else {
          this.userValid = true;
          this.modalError = false;
          this.admin = data.admin;
          this.loginService.setAuthenticated(true);
          this.directionScreen(data);
        }
      }, (error) => {
        console.log(error);
      }
    );
  }

  directionScreen(data: any) {
    this.router.navigate(['/home'], {state: {id: data.id, admin: data.admin}});
  }
}
