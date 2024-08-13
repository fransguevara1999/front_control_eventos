import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from '../event-form/event-form.component';
import { EventListComponent } from '../event-list/event-list.component';
import { AttendeeListComponent } from '../attendee-list/attendee-list.component';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { AsistenteFormComponent } from '../asistente-form/asistente-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventListComponent },
  { path: 'events/new', component: EventFormComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'events/:id/edit', component: EventFormComponent },
  { path: 'events/:id/attendees', component: AttendeeListComponent },
  { path: 'register/:eventId', component: AsistenteFormComponent },
  { path: '**', redirectTo: '/events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
