import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from '../event-form/event-form.component';
import { EventListComponent } from '../event-list/event-list.component';
import { AttendeeListComponent } from '../attendee-list/attendee-list.component';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventListComponent },
  { path: 'events/new', component: EventFormComponent },
  { path: 'events/:id', component: EventDetailComponent }, // Ruta para ver los detalles de un evento
  { path: 'events/:id/edit', component: EventFormComponent }, // Ruta para editar un evento existente
  { path: 'events/:id/attendees', component: AttendeeListComponent },
  { path: '**', redirectTo: '/events' }
];

@NgModule({
  declarations:[],
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
