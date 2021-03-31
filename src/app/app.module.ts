//Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes y servicios
import { AppComponent } from './app.component';
import { BooksService } from './services/books.service';
import { ListasComponent } from './listas/listas.component';
import { HomeComponent } from './home/home.component';
import { AutoresComponent } from './autores/autores.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaComponent } from './lista/lista.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListasComponent,
    HomeComponent,
    AutoresComponent,
    NavbarComponent,
    ListaComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
