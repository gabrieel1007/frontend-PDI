import { Component, ChangeDetectorRef } from '@angular/core';
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
    private edr: ChangeDetectorRef
  ) {}

  public name: string = '';
  public password: string = '';
  public modalError: boolean = false;


  ngOnInit() {
    const userAuth = this.loginService.getCredentialsLocalStorage();
    console.log(userAuth);
    if(userAuth.token){
      this.router.navigate(['/home']);
    }
  }

  async onSubmit() {
    await this.consultCredentials(this.name, this.password);
  }

  async consultCredentials(name: string, password: string) {
    console.log(name, password);
    this.loginService.authenticateUser(name, password).subscribe(
      (data) => {
        console.log(data);

        if(!data.token){
          this.modalError = true;
          return;
        } else {
          this.setCredentialsLocalStorage(data);
        }
      }, (error) => {
        console.log(error);
      }
    );
  }

  directionScreen() {
    this.router.navigate(['/home']);
  }

  async setCredentialsLocalStorage(data: any) {
    if(!data.token) { return; }
    await this.loginService.setCredentialsLocalStorage(data);
    this.directionScreen();
  }
}
