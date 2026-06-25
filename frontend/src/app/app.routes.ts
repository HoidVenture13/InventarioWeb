import { Routes } from '@angular/router';
import { Home } from './shared/home/home';
import { ListaDeCategorias } from './components/features/categoria/lista-de-categorias/lista-de-categorias';
import { CategoriaForm } from './components/features/categoria/categoria-form/categoria-form';
import { Calculadora } from './calculadora/calculadora';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'listaDeCategoria', component: ListaDeCategorias },
  { path: 'categoriaForm', component: CategoriaForm },
  { path: 'categoriaForm/:id', component: CategoriaForm },
  { path: 'calculadora', component: Calculadora },
];
