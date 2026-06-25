import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from '../../../../model/categoria';
import { CategoriaService } from '../../../../service/categoria-service';

@Component({
  selector: 'app-lista-de-categorias',
  imports: [RouterLink],
  templateUrl: './lista-de-categorias.html',
  styleUrl: './lista-de-categorias.css',
})
export class ListaDeCategorias {
  readonly tituloPagina = 'Categorías de Productos';
  readonly categorias = signal<Categoria[]>([]);
  readonly cargando = signal(true);
  readonly error = signal<string | null>(null);

  private readonly categoriaService = inject(CategoriaService);

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.cargando.set(true);
    this.error.set(null);
    this.categoriaService.obtenerCategorias().subscribe({
      next: (datos) => {
        this.categorias.set(datos);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al obtener categorías', err);
        this.error.set('No se pudieron cargar las categorías. Verifica que el backend esté corriendo.');
        this.cargando.set(false);
      },
    });
  }

  eliminar(categoria: Categoria): void {
    Swal.fire({
      title: '¿Eliminar esta categoría?',
      text: `"${categoria.nombreCategoria}" se eliminará permanentemente.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (!result.isConfirmed) return;

      this.categoriaService.eliminarCategoria(categoria.idCategoria).subscribe({
        next: () => {
          this.categorias.update((cats) => cats.filter((c) => c.idCategoria !== categoria.idCategoria));
          Swal.fire({
            title: 'Eliminada',
            text: `"${categoria.nombreCategoria}" ha sido eliminada.`,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
          });
        },
        error: (err) => {
          console.error('Error al eliminar', err);
          Swal.fire('Error', 'No se pudo eliminar la categoría.', 'error');
        },
      });
    });
  }
}
