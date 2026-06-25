import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tituloAplicacion : string = 'Entrega final del proyecto de Angular';
  nombreAutor: string = 'César Arturo Bernal Linares';
}

