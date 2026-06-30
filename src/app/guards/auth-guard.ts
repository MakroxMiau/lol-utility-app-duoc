import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private usuarioAutenticado = false; 

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.usuarioAutenticado) {
      return true;
    } else {
      console.warn('Acceso denegado. Redirigiendo al Login...');
      this.router.navigate(['/login']);
      return false;
    }
  }

  iniciarSesion() {
    this.usuarioAutenticado = true;
  }
}