import { Injectable } from "@angular/core";
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor(private router: Router) { } 

    setCredentialsLocalStorage(data: any) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('admin', data.admin);
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data.id);
    }

    getCredentialsLocalStorage() {
        const token = localStorage.getItem('token');
        return { token };
    }

    getAllCredentialsLocalStorage() {
        const token = this.getToken();
        if(token){
            if(this.checkTokenExpired(token)){
                return this.decodeToken(token);
            } return this.redirectLogin();
        }
        return this.redirectLogin();
    }

    checkTokenExpired(token: string){
        const decoded: any = jwtDecode(token);
        const currentTime = Date.now().valueOf() / 1000;
        return decoded.exp > currentTime ? decoded : null;
    }

    decodeToken(token: string) {
        const decodeToken =  jwtDecode(token);

        return {
            username: decodeToken.username || null,
            admin: decodeToken.admin || null,
            iat: decodeToken.iat || null,
            exp: decodeToken.exp || null,
        }
    }

    redirectLogin(){
        localStorage.clear();
        this.router.navigate(['/login']);
        
    }

    isUserAdmin(){
        return localStorage.getItem('admin');
    }

    logoutUser(){
        localStorage.clear();
    }

    getIdUser(){
        return localStorage.getItem('id');
    }

    getToken(){
        return localStorage.getItem('token');
    }
}