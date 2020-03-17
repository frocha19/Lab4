import { EmpresaService } from './../../servicios/empresa.service';
import { Empresa } from './../../model/empresa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public empresas: Empresa[];
  public empresa: Empresa;

  public empresaSeleccionada: Empresa = {
      denominacion: '',
      telefono: '',
      horario_de_atencion: '',
      quienes_somos: '',
      latitud: null,
      longitud: null,
      domicilio: '',
      email: ''
  }

  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit() {
    this.getAllEmpresas();
  }

  getAllEmpresas() {
    this.empresaService.getAll().subscribe( res => {
      this.empresas = res;
    }, 
    err => {
      alert ('Error al traer todas las empresas: '+ err);
    });
  }

}
