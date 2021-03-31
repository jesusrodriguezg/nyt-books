import { WishlistComponent } from './wishlist/wishlist.component';
import { ListaComponent } from './lista/lista.component';
import { AutoresComponent } from './autores/autores.component';
import { HomeComponent } from './home/home.component';
import { ListasComponent } from './listas/listas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lists', component: ListasComponent},
  { path: 'list/:list', component: ListaComponent},
  { path: '', component: HomeComponent},
  { path: 'authors/:author', component: AutoresComponent},
  { path: 'wishlist', component: WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
