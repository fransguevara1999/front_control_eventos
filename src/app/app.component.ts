import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-control-asistencia';
  items: MenuItem[] = [
    {
      label: 'Eventos',
      items: [
        { label: 'Lista de Eventos', icon: 'pi pi-list', routerLink: '/events' },
        { label: 'Nuevo Evento', icon: 'pi pi-plus', routerLink: '/events/new' }
      ]
    }
    // Puedes agregar más elementos al menú si es necesario
  ];
}
