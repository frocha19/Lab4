import { TablaempresaComponent } from './componentes/tablaempresa/tablaempresa.component';
import { IndexComponent } from './componentes/index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './componentes/page404/page404.component';
import { HomeComponent } from './componentes/home/home.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home/:id', component: HomeComponent},
  { path: 'tabla/empresa', component: TablaempresaComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
