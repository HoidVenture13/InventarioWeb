import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly autor = 'De La Riva Martinez Hector Josue';
  readonly anio = new Date().getFullYear();
}
