import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api'; // Asegúrate de importar MessageService
import { EventService } from '../service/event.service';
import { Event } from '../model/Event';
import { AsistenteService } from '../service/asistente.service';
import { Asistente } from '../model/Asistente';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [MessageService]   
 // Agrega MessageService a los providers
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  displayQR: boolean = false;
  qrCodeValue: string = '';
  qrCodeEventName: string = '';
  asistente: Asistente = {
    nombre: '',
    dni: ''
  };
  selectedEventId: number | null = null;

  constructor(
    private eventService: EventService,
    private router: Router,
    private messageService: MessageService,
    private asistenteService: AsistenteService
  ) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe(
      (events) => {
        this.events = events;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  onSubmit() {
    if (this.selectedEventId !== null) {
      // `selectedEventId` es un número, por lo que es seguro pasarlo aquí
      this.asistenteService.registrarAsistencia(this.selectedEventId, this.asistente).subscribe(
        response => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Asistencia registrada exitosamente.' });
          this.copyLink(this.selectedEventId!); // Copia el enlace después de registrar la asistencia
        },
        error => {
          console.error('Error al registrar la asistencia:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo registrar la asistencia.' });
        }
      );
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No hay un evento seleccionado.' });
    }
  }

  editEvent(event: Event) {
    this.router.navigate(['/events', event.id]);
  }

  viewAttendees(event: Event) {
    this.router.navigate(['/events', event.id, 'attendees']);
  }

  copyLink(eventId: number) {
    const link = `${window.location.origin}/register/${eventId}`;
  
    navigator.clipboard.writeText(link).then(() => {
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Enlace de asistencia copiado al portapapeles.' });
    }).catch(err => {
      console.error('Error al copiar enlace de asistencia:', err);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo copiar el enlace de asistencia.' });
    });
  }

  showQRCode(link: string, eventName: string) {
    this.qrCodeValue = link;
    this.qrCodeEventName = eventName;
    this.displayQR = true;
  }

  selectEvent(eventId: number) {
    this.selectedEventId = eventId;
  }
}