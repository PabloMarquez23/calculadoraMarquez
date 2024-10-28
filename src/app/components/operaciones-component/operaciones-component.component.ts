import { Component } from '@angular/core';
import { OperacionServiceService } from '../../services/operacion-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operaciones-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './operaciones-component.component.html',
  styleUrl: './operaciones-component.component.scss'
})
export class OperacionesComponentComponent {

  first-number: number = '';
  second-number: number = '';
  calculadoras: any[] = [];
  cursoSeleccionadoId: any;

  constructor(private router: Router, private operacionServiceService: OperacionServiceService) {
    this.calculadoras = this.operacionService.obtenerCalculadora(); // Obtener las tareas del servicio
  }

  getCalculadoras() {
    return this.calculadoras;
  }

  verCalculos(calculadora: any) {
    this.router.navigate(['/operaciones', calculadora.id]); // Navegar hacia el componente de detalles usando el id único
  }

  eliminarCalculadora(calculadora: any) {
    const index = this.calculadoras.indexOf(calculadora);
    if (index > -1) {
      this.calculadoras.splice(index, 1);
      this.operacionService.eliminarCalculadora(calculadora.id); // Usar el servicio para eliminar
    }
  }

  agregarCalculadora(event: Event): void {
    event.preventDefault();

    if (/\d/.test(this.first-number) || /\d/.test(this.second-number)) {
      alert('El nombre del curso y el nombre del instructor no pueden contener números.');
      return;


    const nuevoCalculadora = {
      id: this.generarIdUnico(),
      first-number: this.first-number,
      second-number: this.second-number,
    };

    this.calculadora.push(nuevoCalculadora);
    this.operacionService.agregarCalculadora(nuevoCalculadora); // Usar el servicio para agregar la tarea
    this.limpiarFormulario();
  }

  limpiarFormulario(): void {
    this.first-calculadora = '';
    this.second-calculadora = '';
  }
  generarIdUnico(): string {
    return Math.random().toString(36).substring(2, 9); // Genera un ID único para las tareas
  }
}
