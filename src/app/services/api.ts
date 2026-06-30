import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
  private storageIniciado = false;

  constructor(private http: HttpClient, private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.storageIniciado = true;
  }

  obtenerAmigos(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap((datos) => {
        this.storage.set('amigos_offline', datos);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error de API o sin red. Cargando desde Storage...', error.status);
        
        return from(this.storage.get('amigos_offline')).pipe(
          map(datosLocales => {
            if (datosLocales) {
              return datosLocales;
            } else {
              throw new Error('No hay datos locales ni acceso a internet.');
            }
          })
        );
      })
    );
  }
}