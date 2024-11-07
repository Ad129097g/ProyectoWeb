import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path:  'productos', component: ProductosComponent },
  { path: 'ofertas', component:OfertasComponent },
  { path: 'servicios', component:ServiciosComponent },
  { path: 'navmenu', component:NavmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
