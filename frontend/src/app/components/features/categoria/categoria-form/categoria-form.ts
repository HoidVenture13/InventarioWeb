import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from '../../../../model/categoria';
import { CategoriaService } from '../../../../service/categoria-service';

@Component({
  selector: 'app-categoria-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './categoria-form.html',
  styleUrl: './categoria-form.css',
})
export class CategoriaForm {
  readonly tituloFormulario = 'Formulario de Categoría';
  readonly categoriaActual = signal<Categoria>(new Categoria());
  readonly cargando = signal(false);
  readonly idRuta = input<number>();

  private readonly router = inject(Router);
  private readonly categoriaService = inject(CategoriaService);

  esEdicion(): boolean {
    return !!(this.idRuta() && this.idRuta()! > 0);
  }

  ngOnInit(): void {
    const id = this.idRuta();
    if (id && id > 0) {
      this.cargando.set(true);
      this.categoriaService.obtenerCategoriaPorId(id).subscribe({
        next: (categoria) => {
          this.categoriaActual.set(categoria);
          this.cargando.set(false);
        },
        error: (err) => {
          console.error('Error al obtener la categoría', err);
          this.cargando.set(false);
          Swal.fire('Error', 'No se pudo cargar la categoría', 'error');
          this.router.navigate(['/listaDeCategoria']);
        },
      });
    }
  }

  actualizarNombre(nombre: string): void {
    this.categoriaActual.update((c) => ({ ...c, nombreCategoria: nombre }));
  }

  actualizarDescripcion(descripcion: string): void {
    this.categoriaActual.update((c) => ({ ...c, descripcionCategoria: descripcion }));
  }

  onSubmit(): void {
    const cat = this.categoriaActual();
    if (!cat.nombreCategoria?.trim() || !cat.descripcionCategoria?.trim()) {
      Swal.fire('Validación', 'Todos los campos son obligatorios', 'warning');
      return;
    }

    this.cargando.set(true);

    const operacion = this.esEdicion()
      ? this.categoriaService.actualizarCategoria(cat)
      : this.categoriaService.registrarCategoria(cat);

    operacion.subscribe({
      next: (resultado) => {
        this.cargando.set(false);
        const nombre = resultado?.nombreCategoria ?? cat.nombreCategoria;
        Swal.fire({
          title: this.esEdicion() ? 'Categoría Actualizada' : 'Categoría Registrada',
          text: `"${nombre}" ${this.esEdicion() ? 'actualizada' : 'registrada'} con éxito.`,
          icon: 'success',
        });
        this.router.navigate(['/listaDeCategoria']);
      },
      error: (err) => {
        this.cargando.set(false);
        console.error('Error:', err);
        Swal.fire('Error', err.error?.message || 'Operación fallida', 'error');
      },
    });
  }
}
