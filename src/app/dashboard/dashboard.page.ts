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
  AnimationController
} from '@ionic/angular/standalone';

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
    IonCardSubtitle
  ]
})
export class DashboardPage implements OnInit, AfterViewInit {

  @ViewChildren(IonCard, { read: ElementRef }) tarjetas!: QueryList<ElementRef>;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.animarMenu();
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