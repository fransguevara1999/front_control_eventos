import { Component } from '@angular/core';
import { Asistente } from '../model/Asistente';
import { AsistenteService } from '../service/asistente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asistente-form',
  templateUrl: './asistente-form.component.html',
  styleUrls: ['./asistente-form.component.css']
})
export class AsistenteFormComponent {
  asistente: Asistente = {
    nombre: '',
    dni: ''
  };
  eventId!: number;

  constructor(
    private asistenteService: AsistenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = +params['eventId'];
    });
  }

  onSubmit() {
    this.asistenteService.createAsistente(this.asistente, this.eventId).subscribe(
      response => {
        console.log('Asistente creado:', response);
        this.router.navigate(['/events', this.eventId, 'attendees']); // Redirigir a la lista de asistentes del evento
      },
      error => {
        console.error('Error al crear el asistente:', error);
      }
    );
  }
}
