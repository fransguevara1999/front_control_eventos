// event.ts

export class Event {
    id!: number;
    name!: string;
    startDateTime!: Date; 
    endDateTime!: Date;   
    location!: string;             
    requiresRegistration!: boolean;
    attendanceLink!: string;  
    controlLink!: string; 
  
    // Puedes agregar un constructor si deseas inicializar las propiedades:
    constructor(data?: Partial<Event>) {
      Object.assign(this, data);
    }
  }
  