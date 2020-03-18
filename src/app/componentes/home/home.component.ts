import { Component, OnInit, Input } from '@angular/core';
import { Empresa } from '../../model/empresa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @Input() empresaSeleccionada: Empresa;
  public empresaOrignal: any;
  public empresa = {
    denominacion: 'Empresa 1',
    telefono: '123456789',
    quienesSomos: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit.',
    domicilio: '4578 Marmora Road,Glasgow D04 89GR',
    email: 'info@demolink.org'
  };

  ngOnInit(): void {
  }

}
