import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent } from './components/home/home.component';
import { TablaempresaComponent } from './components/tablaempresa/tablaempresa.component';
import { ModalempresaComponent } from './components/modalempresa/modalempresa.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { TablanoticiaComponent } from './components/tablanoticia/tablanoticia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpresaService } from './services/empresa.service';
import { ElementonoticiaComponent } from './components/elementonoticia/elementonoticia.component';
import { EditorModule } from '@tinymce/tinymce-angular';

import { ElementohomeComponent } from './components/elementohome/elementohome.component';
import { ElementodetalleComponent } from './components/elementodetalle/elementodetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    DetalleComponent,
    TablaempresaComponent,
    ModalempresaComponent,
    DetalleComponent,
    TablanoticiaComponent,
    ElementonoticiaComponent,
    ElementohomeComponent,
    ElementodetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    EditorModule
  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
