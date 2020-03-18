import { Component, OnInit, Input } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: EmpresaService) { }
  @Input() ids: number;
  public empresaOrignal: any;
  public empresa = {
    denominacion: 'Empresa 1',
    telefono: '123456789',
    quienesSomos: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit.',
    domicilio: '4578 Marmora Road,Glasgow D04 89GR',
    email: 'info@demolink.org'
  };

  ngOnInit(): void {
    console.log(this.ids);
    console.log(this.service.getOne(this.ids));
  }

}
