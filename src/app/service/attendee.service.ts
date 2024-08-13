import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asistente } from '../model/Asistente';

@Injectable({
  providedIn: 'root'
})
export class AttendeeService {
  private apiUrl = 'http://localhost:8080/api/asistentes'; 

  constructor(private http: HttpClient) { }

  getAttendeesByEventId(eventId: number): Observable<Asistente[]> {
    return this.http.get<Asistente[]>(`${this.apiUrl}/evento/${eventId}`);
  }
}