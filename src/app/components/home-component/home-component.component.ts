import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {
  mensajeBienvenida: string = '¡Bienvenido a una calculadora digital!';
}
