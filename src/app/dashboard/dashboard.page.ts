import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  AnimationController 
} from '@ionic/angular/standalone';

import { ApiService } from '../services/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel
  ]
})
export class DashboardPage implements OnInit, AfterViewInit {

  @ViewChildren(IonCard, { read: ElementRef }) tarjetas!: QueryList<ElementRef>;

  listaAmigos: any[] = []; 
  errorCarga: boolean = false;

  constructor(
    private animationCtrl: AnimationController, 
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.cargarAmigos();
  }

  ngAfterViewInit() {
    this.animarMenu();
  }

  cargarAmigos() {
    this.apiService.obtenerAmigos().subscribe({
      next: (datos: any) => {
        this.listaAmigos = datos;
      },
      error: (err: any) => {
        console.error('Fallo total de carga', err);
        this.errorCarga = true;
      }
    });
  }

  animarMenu() {
    const elementosMapeados = this.tarjetas.map(card => card.nativeElement);

    const animacionMenu = this.animationCtrl.create()
      .addElement(elementosMapeados)
      .duration(800) 
      .easing('ease-out') 
      .fromTo('opacity', '0', '1') 
      .fromTo('transform', 'translateY(40px)', 'translateY(0px)'); 

    animacionMenu.play();
  }
}