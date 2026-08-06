import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(usuario: string, senha: string): boolean {

    if (usuario === 'admin' && senha === '123456') {

      localStorage.setItem('login', 'true');

      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('login');
  }

  isLogged() {
    return localStorage.getItem('login') === 'true';
  }

}