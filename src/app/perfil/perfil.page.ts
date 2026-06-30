import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonAvatar, 
  IonItem, 
  IonLabel, 
  IonToggle, 
  IonList, 
  IonListHeader 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonBackButton, 
    IonAvatar, 
    IonItem, 
    IonLabel, 
    IonToggle, 
    IonList, 
    IonListHeader
  ]
})
export class PerfilPage implements OnInit {

  notificacionesActivas: boolean = true;
  modoOscuro: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}