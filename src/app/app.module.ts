import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { TablaempresaComponent } from './components/tablaempresa/tablaempresa.component';
import { ModalempresaComponent } from './components/modalempresa/modalempresa.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { TablanoticiaComponent } from './components/tablanoticia/tablanoticia.component';
import { ModalnoticiaComponent } from './components/modalnoticia/modalnoticia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Page404Component,
    HomeComponent,
    DetalleComponent,
    TablaempresaComponent,
    ModalempresaComponent,
    DetalleComponent,
    TablanoticiaComponent,
    ModalnoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
