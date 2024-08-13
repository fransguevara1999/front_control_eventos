// event.ts

export class Event {
  id!: number;
  nombre!: string; // Cambiado de "name" a "nombre"
  fechaHoraInicio!: Date; // Cambiado de "startDateTime" a "fechaHoraInicio"
  fechaHoraFin!: Date; // Cambiado de "endDateTime" a "fechaHoraFin"
  ubicacion!: string; // Cambiado de "location" a "ubicacion"
  requiereRegistro!: boolean; // Cambiado de "requiresRegistration" a "requiereRegistro"
  enlaceAsistencia!: string; // Cambiado de "attendanceLink" a "enlaceAsistencia"
  enlaceControl!: string; // Cambiado de "controlLink" a "enlaceControl"

  constructor(data?: Partial<Event>) {
      Object.assign(this, data);
  }
  }
  