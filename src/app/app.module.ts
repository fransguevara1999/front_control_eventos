import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { AttendeeListComponent } from './attendee-list/attendee-list.component';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AppRoutingModule } from './modules/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    EventListComponent,
    AttendeeListComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    MenubarModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
