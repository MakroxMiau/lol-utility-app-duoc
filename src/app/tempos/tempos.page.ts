import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tempos',
  templateUrl: './tempos.page.html',
  styleUrls: ['./tempos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonBackButton, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonButton
  ]
})
export class TemposPage implements OnInit, OnDestroy {
  flashEnemigoMid: number = 0; 
  private timerMid: any;

  constructor() { }

  ngOnInit() {
  }

  iniciarFlashMid() {
    this.flashEnemigoMid = 300;
    
    if (this.timerMid) clearInterval(this.timerMid);

    this.timerMid = setInterval(() => {
      if (this.flashEnemigoMid > 0) {
        this.flashEnemigoMid--;
      } else {
        clearInterval(this.timerMid);
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timerMid) clearInterval(this.timerMid);
  }
}