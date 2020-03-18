import { Empresa } from './../../model/empresa';
import { EmpresaService } from './../../servicios/empresa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  empresa: Empresa = {
    id: 0,
    denominacion: '',
    telefono: '',
    horario_de_atencion: '',
    quienes_somos: '',
    latitud: null,
    longitud: null,
    domicilio: '',
    email: ''
  }

  url = window.location.href;

  constructor(private service: EmpresaService, private actRouter : ActivatedRoute) {
  }

  ngOnInit() {
  }

  direction(): boolean{
    if(this.url === "http://localhost:4200/"){
      return false;
    }else{
      return true;
    }
  }

}
