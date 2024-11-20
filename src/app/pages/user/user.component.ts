import { Component } from '@angular/core';
import { UserService } from './user.service';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatList, MatListModule, MatSelectionList } from '@angular/material/list';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../components/edit-dialog/edit-dialog.component';
import { EditGlobalDialogComponent } from '../components/edit-global-dialog/edit-global-dialog.component';
import { PointsHistoryDialogComponent } from '../components/points-history-dialog/points-history-dialog.component';
import { FormsModule, NgModel } from '@angular/forms';
import { find } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ 
    MatSidenavModule,
    MatListModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public users: any[] = [];
  public admin: boolean = false;
  public selectedUsers: any[] = [];
  public nameUser: string | undefined | null = null;


  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.admin = this.userService.getIfuserIsAdmin();
  }

  ngOnInit() { 
    const userAuth = this.userService.getCredentialsLocalStorage();
    this.nameUser = userAuth?.username;
    this.consultUsersAndPoints();
  }

  async logout() {
    await this.userService.logoutUser();
    this.router.navigate(['/login']);
  }

  refresh() {
    this.consultUsersAndPoints();
  }

  searchByName(event: Event) {
    const input = event.target as HTMLInputElement;
    if(!input.value) { this.consultUsersAndPoints(); return;}
    this.users = this.findByUserName(this.users, input.value);
  }

  findByUserName(users: any[], username: string): any[] {
    return users
      .filter(user => user.name.toLowerCase().includes(username.toLowerCase()))
      .sort((a,  b) => a.name.localeCompare(b.name));
  }
  
  consultUsersAndPoints() {
    this.userService.getusersAndPoints().subscribe(
      (data) => {
        this.users = data;
      }, (error) => {
        console.log(error);
      }
    );
  }

  editPoints(): void{
    const dialogRef = this.dialog.open(EditDialogComponent, {
      height: '500px',
      width: '700px',
      data: { users: this.users },
    });
  }

  resetAllPoints(): void{
    const dialogRef = this.dialog.open(EditGlobalDialogComponent, {
      height: '500px',
      width: '700px',
      data: { users: this.users },
    });
  }

  modalHistory(): void{
    const dialogRef = this.dialog.open(PointsHistoryDialogComponent, {
      height: '500px',
      width: '700px',
      data: { users: this.users },
    });
  } 

}
