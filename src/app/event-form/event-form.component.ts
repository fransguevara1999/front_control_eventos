import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; 
import { MessageService } from 'primeng/api';
import { EventService } from '../service/event.service';
import { Event } from '../model/Event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  providers: [MessageService]
})
export class EventFormComponent implements OnInit {
  event: Event = new Event(); 
  isEditing: boolean = false;

  constructor(
    private eventService: EventService, 
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditing = true;
        this.loadEvent(+params['id']);
      }
    });
  }

  loadEvent(id: number) {
    this.eventService.getEventById(id).subscribe(
      event => this.event = event,
      error => console.error('Error fetching event:', error)
    );
  }

  onSubmit() { // Definimos el método onSubmit
    const action = this.isEditing ? this.eventService.updateEvent(this.event) : this.eventService.createEvent(this.event);

    action.subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Event saved!' });
        this.router.navigate(['/events']);
      },
      error => {
        console.error('Error saving event:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to save event' });
      }
    );
  }
}
