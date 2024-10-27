import { Routes , Router} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './guards/guards/auth.guards';

export const routes: Routes = [
    { path: 'home', component: UserComponent },
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '/login'},
];
