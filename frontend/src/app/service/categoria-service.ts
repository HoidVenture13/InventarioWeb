import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';
import { APP_CONFIG } from '../config/app-config';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private readonly http = inject(HttpClient);
  private readonly config = inject(APP_CONFIG);

  private get urlBase(): string {
    return `${this.config.apiBaseUrl}/api/v1/categorias/categoria`;
  }

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlBase);
  }

  obtenerCategoriaPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.urlBase}/${id}`);
  }

  registrarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.urlBase, categoria, { headers: this.headers });
  }

  eliminarCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${id}`, { headers: this.headers });
  }

  actualizarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(
      `${this.urlBase}/${categoria.idCategoria}`,
      categoria,
      { headers: this.headers },
    );
  }
}
