import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './componentes/index/index.component';
import { Page404Component } from './componentes/page404/page404.component';
import { HomeComponent } from './componentes/home/home.component';
import { TablaempresaComponent } from './componentes/tablaempresa/tablaempresa.component';
import { ModalempresaComponent } from './componentes/modalempresa/modalempresa.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { TablanoticiaComponent } from './componentes/tablanoticia/tablanoticia.component';
import { ModalnoticiaComponent } from './componentes/modalnoticia/modalnoticia.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Page404Component,
    HomeComponent,
    NavbarComponent,
    DetalleComponent,
    TablaempresaComponent,
    ModalempresaComponent,
    NavbarComponent,
    DetalleComponent,
    TablanoticiaComponent,
    ModalnoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
