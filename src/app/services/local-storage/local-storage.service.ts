import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

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

    getAllCredentialsLocalStorage(){
        const token = localStorage.getItem('token');
        const admin = localStorage.getItem('admin');
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const id = localStorage.getItem('id');
        return { token, admin, name, email, id };
    }

    isUserAdmin(){
        return localStorage.getItem('admin');
    }

    logoutUser(){
        localStorage.clear();
    }
}