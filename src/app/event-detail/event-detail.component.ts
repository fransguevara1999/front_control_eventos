import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../model/Event';
import { Asistente } from '../model/Asistente';
import { EventService } from '../service/event.service';
import { AttendeeService } from '../service/attendee.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  eventId!: number;
  event!: Event;
  attendees: Asistente[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private attendeeService: AttendeeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = +params['id'];
      this.loadEventDetails();
      this.loadAttendees();
    });
  }

  loadEventDetails() {
    this.eventService.getEventById(this.eventId).subscribe(
      (event) => (this.event = event),
      (error) => console.error('Error fetching event details:', error)
    );
  }

  loadAttendees() {
    this.attendeeService.getAttendeesByEventId(this.eventId).subscribe(
      (attendees) => (this.attendees = attendees),
      (error) => console.error('Error fetching attendees:', error)
    );
  }

  editEvent() {
    this.router.navigate(['/events', this.eventId]);
  }

  goToEventList() {
    this.router.navigate(['/events']);
  }
}