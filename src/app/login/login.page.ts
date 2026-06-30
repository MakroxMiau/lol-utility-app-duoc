import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private authGuard: AuthGuard) { }

  ngOnInit() {
  }

  ingresar() {
    this.authGuard.iniciarSesion();
    this.router.navigate(['/dashboard']);
  }

}
