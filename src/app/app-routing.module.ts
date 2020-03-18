import { ElementonoticiaComponent } from './components/elementonoticia/elementonoticia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TablanoticiaComponent } from './components/tablanoticia/tablanoticia.component';
import { TablaempresaComponent } from './components/tablaempresa/tablaempresa.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home/:id', component: HomeComponent},
  { path: 'detalle/:id', component: DetalleComponent},
  { path: 'tabla/empresa', component: TablaempresaComponent},
  { path: 'tabla/noticia', component: TablanoticiaComponent},
  { path: 'noticia/:id', component: ElementonoticiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
