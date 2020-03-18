import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../services/empresa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private empresaService: EmpresaService, private router: Router) { }

  public am = parseInt(window.location.href.substring(27, window.location.href.length), 10);
  public empresa: Empresa = {
    id: 0,
    denominacion: '',
    telefono: '',
    quienes_somos: '',
    domicilio: '',
    email: '',
    horario_de_atencion: '',
    latitud: null,
    longitud: null
  };

  ngOnInit(): void {
    this.empresaService.getOne(this.am).subscribe( res => {
      this.empresa = res;
    });
  }

  openDetalle() {
    localStorage.setItem('titulo', 'Curso de Angular avanzado - Víctor Robles');
    console.log(localStorage.getItem('titulo'));
    this.router.navigate(['detalle/1']);
  }
}
