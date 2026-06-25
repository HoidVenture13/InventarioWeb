import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  readonly titulo = 'Calculadora Básica';
  readonly numero1 = signal<number>(0);
  readonly numero2 = signal<number>(0);
  readonly resultado = signal<number | null>(null);
  readonly operacion = signal<string>('');

  private calcular(operador: string, fn: (a: number, b: number) => number): void {
    this.operacion.set(operador);
    this.resultado.set(fn(this.numero1(), this.numero2()));
  }

  sumar(): void {
    this.calcular('+', (a, b) => a + b);
  }

  restar(): void {
    this.calcular('-', (a, b) => a - b);
  }

  multiplicar(): void {
    this.calcular('×', (a, b) => a * b);
  }

  dividir(): void {
    if (this.numero2() === 0) {
      this.resultado.set(null);
      this.operacion.set('÷');
      return;
    }
    this.calcular('÷', (a, b) => a / b);
  }
}
