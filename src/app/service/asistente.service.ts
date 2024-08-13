import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asistente } from '../model/Asistente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {
  private apiUrl = 'http://localhost:8080/api/asistentes';

  constructor(private http: HttpClient) { }

  createAsistente(asistente: Asistente, eventId: number): Observable<Asistente> {
    return this.http.post<Asistente>(`${this.apiUrl}/${eventId}`, asistente);
  }
  
  registrarAsistencia(eventId: number, asistente: Asistente): Observable<Asistente> {
    return this.http.post<Asistente>(`${this.apiUrl}/${eventId}`, asistente);
  }
}