import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
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
  fotoPerfil: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';

  notificacionesActivas: boolean = true;
  modoOscuro: boolean = false;

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera 
    });

    if (image.webPath) {
      this.fotoPerfil = image.webPath; 
    }
  }

  constructor() { }

  ngOnInit() {
  }
}