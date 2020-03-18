import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { TablanoticiaComponent } from './componentes/tablanoticia/tablanoticia.component';
import { TablaempresaComponent } from './componentes/tablaempresa/tablaempresa.component';
import { Page404Component } from './componentes/page404/page404.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home/:id', component: HomeComponent},
  { path: 'detalle/:id', component: DetalleComponent},
  { path: 'tabla/empresa', component: TablaempresaComponent},
  { path: 'tabla/noticia', component: TablanoticiaComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
