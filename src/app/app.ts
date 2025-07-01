import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Videojuegos } from './components/videojuegos/videojuegos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Videojuegos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreProyecto = 'Testeando Angular';
  descripcion = "Proyecto en el que se repasa los conceptos de Angular"
}
