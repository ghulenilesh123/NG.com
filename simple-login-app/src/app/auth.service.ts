import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if(username === 'admin' && password === '1234'){
      localStorage.setItem('token', 'loggedin');
      this.router.navigate(['/dashboard']);
      return true;
    }
    alert('Invalid credentials');
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') === 'loggedin';
  }
}
