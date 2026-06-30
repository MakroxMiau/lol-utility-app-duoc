import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonInput, 
  IonSelect, 
  IonSelectOption, 
  IonButton, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-wave-manager',
  templateUrl: './wave-manager.page.html',
  styleUrls: ['./wave-manager.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonItem, 
    IonInput, 
    IonSelect, 
    IonSelectOption, 
    IonButton, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent,
    IonButtons,
    IonBackButton
  ]
})
export class WaveManagerPage implements OnInit {
  waveForm!: FormGroup;
  resultadoAnalisis: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.waveForm = this.fb.group({
      subditosAliados: ['', [Validators.required, Validators.min(0)]],
      subditosEnemigos: ['', [Validators.required, Validators.min(0)]],
      posicionLinea: ['', Validators.required]
    });
  }

  calcularOleada() {
    if (this.waveForm.invalid) {
      this.resultadoAnalisis = 'Por favor, llena todos los campos correctamente.';
      return;
    }

    const aliados = this.waveForm.value.subditosAliados;
    const enemigos = this.waveForm.value.subditosEnemigos;
    const posicion = this.waveForm.value.posicionLinea;

    const diferencia = enemigos - aliados;

    if (diferencia === 0) {
      this.resultadoAnalisis = 'La línea está equilibrada. Se mantendrá en el centro a menos que intervengas.';
    } else if (diferencia > 0) {
      if (diferencia >= 3 && posicion === 'aliada') {
        this.resultadoAnalisis = `¡Perfecto! Tienes una diferencia de +${diferencia} súbditos enemigos. Puedes CONGELAR (Freeze) la línea de forma indefinida cerca de tu torre.`;
      } else {
        this.resultadoAnalisis = `La línea hace Slow Push hacia tu torre. El enemigo acumulará una oleada grande contra ti.`;
      }
    } else {
      this.resultadoAnalisis = `Tienes más súbditos aliados. Tu línea hará Slow Push hacia el enemigo. ¡Ideal para buscar un dive o resetear en base!`;
    }
  }
}