import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendeeService } from '../service/attendee.service';
import { Asistente } from '../model/Asistente';


@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {
  eventId!: number;
  attendees: Asistente[] = [];

  constructor(
    private route: ActivatedRoute,
    private attendeeService: AttendeeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = +params['id']; 
      this.loadAttendees();
    });
  }

  loadAttendees() {
    this.attendeeService.getAttendeesByEventId(this.eventId)
      .subscribe(
        attendees => this.attendees = attendees,
        error => console.error('Error al cargar asistentes:', error)
      );
  }
}
