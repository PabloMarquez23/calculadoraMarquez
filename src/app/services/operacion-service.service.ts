import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionServiceService {
  private localStorageKey = 'calculadora';

  constructor() { }

  agregarCalculadora(calculadora: any): void {
    const tareas = this.obtenerCalculadora();
    tareas.push(calculadora);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  obtenerCalculadora(): any[] {
    const calculadora = localStorage.getItem(this.localStorageKey);
    return calculadora ? JSON.parse(calculadora) : [];
  }

  eliminarCalculadora(id: string): void {
    const calculadora = this.obtenerCalculadora();
    const calculadoraActualizadas = calculadora.filter((calculadora: any) => calculadora.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(calculadoraActualizadas));
  }

  obtenerCalculadoraPorId(id: string): any {
    const calculadora = this.obtenerCalculadora();
    return calculadora.find((calculadora: any) => calculadora.id === id); // Asegúrate de que el ID sea consistente
  }
}
