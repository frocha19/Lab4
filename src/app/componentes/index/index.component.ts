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

  // public empresas: [];
  public empresas: [
    {
      id: 0,
      denominacion: 'Pagina1'},
    {
      id: 1,
      denominacion: 'Pagina2'},
    {
      id: 2,
      denominacion: 'Pagina3'}
  ];
  public empresa: Empresa;

  public empresaSeleccionada: Empresa = {
    id: 0,
    denominacion: ''
  };

  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit(): void {
  }

  getAllEmpresas() {
    this.empresaService.getAll().subscribe( res => {
      // this.empresas = res;
    },
    err => {
      alert ('Error al traer todas las empresas: ' + err);
    });
  }

  getOne(id: number) {
    this.empresaService.getOne(id).subscribe( res => {
      this.empresa = res;
      this.router.navigate[('/home/' + id)];
    },
    err => {
      alert ('Error al traer todas las empresas: ' + err);
    });
  }

}
