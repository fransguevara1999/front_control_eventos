import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenteService } from '../service/asistente.service';
import { EventService } from '../service/event.service';
import { Asistente } from '../model/Asistente';
import { Event } from '../model/Event';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-asistente-form',
  templateUrl: './asistente-form.component.html',
  styleUrls: ['./asistente-form.component.css']
})
export class AsistenteFormComponent implements OnInit {
  asistente: Asistente = {
    nombre: '',
    dni: ''
  };
  eventId!: number;
  event!: Event;

  constructor(
    private asistenteService: AsistenteService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.eventId = +this.route.snapshot.paramMap.get('eventId')!;
    this.loadEventDetails();
  }

  loadEventDetails() {
    this.eventService.getEventById(this.eventId).subscribe(
      (event) => {
        this.event = event;
      },
      (error) => {
        console.error('Error fetching event details:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar los detalles del evento.' });
      }
    );
  }

  onSubmit() {
    if (!this.event || !this.event.id) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo registrar la asistencia porque el ID del evento no está definido.' });
      return;
    }
  
    this.asistenteService.registrarAsistencia(this.event.id, this.asistente).subscribe(
      response => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Asistencia registrada exitosamente.' });
        this.copyLink(); // Opcionalmente, puedes copiar el enlace después de registrar la asistencia
      },
      error => {
        console.error('Error al registrar la asistencia:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo registrar la asistencia.' });
      }
    );
  }

  copyLink() {
    const link = `${window.location.origin}/register/${this.event.id}`;

    navigator.clipboard.writeText(link).then(() => {
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Enlace de asistencia copiado al portapapeles.' });
    }).catch(err => {
      console.error('Error al copiar enlace de asistencia:', err);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo copiar el enlace de asistencia.' });
    });
  }
}
