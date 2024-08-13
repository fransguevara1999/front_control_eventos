import { Component, OnInit } from '@angular/core';
import { Asistente } from '../model/Asistente';
import { AsistenteService } from '../service/asistente.service';

@Component({
  selector: 'app-asistente-form',
  templateUrl: './asistente-form.component.html',
  styleUrls: ['./asistente-form.component.css']
})
export class AsistenteFormComponent implements OnInit{
  asistente: Asistente = {
    nombre: '',
    dni: ''
  };
  constructor(private asistenteService: AsistenteService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    this.asistenteService.createAsistente(this.asistente).subscribe(
      response => {
        console.log('Asistente creado:', response);
        // Aquí puedes manejar la respuesta, como redirigir a otra página o mostrar un mensaje de éxito
      },
      error => {
        console.error('Error al crear el asistente:', error);
      }
    );
  }
}
