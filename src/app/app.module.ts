import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProductosComponent,
    OfertasComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
