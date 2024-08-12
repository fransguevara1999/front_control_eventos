import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api'; // Asegúrate de importar MessageService
import { EventService } from '../service/event.service';
import { Event } from '../model/Event';

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

  constructor(
    private eventService: EventService, 
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe(
      (events) => {this.events = events},
      (error) => {console.error('Error fetching events:', error);}
    );
  }

  editEvent(event: Event) {
    this.router.navigate(['/events', event.id]); 
  }

  viewAttendees(event: Event) {
    this.router.navigate(['/events', event.id, 'attendees']);
  }

  copyLink(link: string) {
    navigator.clipboard.writeText(link).then(() => {
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Enlace copiado al portapapeles' });
    }).catch(err => {
      console.error('Error al copiar enlace:', err);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo copiar el enlace' });
    });
  }

  showQRCode(link: string, eventName: string) {
    this.qrCodeValue = link;
    this.qrCodeEventName = eventName;
    this.displayQR = true;
  }
}