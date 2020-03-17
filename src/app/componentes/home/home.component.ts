import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empresa = {
    denominacion: 'Empresa 1',
    telefono: '123456789',
    quienesSomos: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit.',
    domicilio: '4578 Marmora Road,Glasgow D04 89GR',
    email: 'info@demolink.org'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
