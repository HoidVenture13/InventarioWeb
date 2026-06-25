import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly autor = 'Arellano Acosta Ixchel';
  readonly anio = new Date().getFullYear();
}
