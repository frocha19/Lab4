import { Component, OnInit, Input, Host, Optional } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../services/empresa.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

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

  constructor(@Host() @Optional() private tabla: HomeComponent) { }

  /*@Input() set empresaSel(valor) {
    if (valor) {
      this.empresa = valor;
      console.log(valor);
      console.log(this.empresa);
    }
  }*/

  ngOnInit(): void {
    // this.empresa = this.tabla.empresa;
    // setTimeout(function() {console.log(this.tabla.empresa); }, 3000);
    console.log(localStorage.getItem('titutlo'));
  }

}
