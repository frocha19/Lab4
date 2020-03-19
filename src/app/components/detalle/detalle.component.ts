import { EmpresaService } from './../../services/empresa.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../model/noticia';
import { NoticiaService } from '../../services/noticia.service';
import { Empresa } from 'src/app/model/empresa';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public noticia: Noticia = {
    id: 0,
    titulo_de_la_noticia: '',
    resumen_de_la_noticia: '',
    imagen_noticia: '',
    contenido_html: '',
    publicada: '',
    fecha_publicacion: null,
    idEmpresa: null
  };
  public empresa: Empresa = {
    id: 0,
    denominacion: '',
    telefono: '',
    horario_de_atencion: '',
    quienes_somos: '',
    latitud: null,
    longitud: null,
    domicilio: '',
    email: ''
  };

  constructor(private actRoute: ActivatedRoute, private noticiaServicio: NoticiaService, private empresaServicio: EmpresaService) {
    this.actRoute.params.subscribe((data) => {
      if (data['id']) {
        this.getOne(data['id']);
      }
    });
  }

  ngOnInit(): void {
  }

  getOne(id: number) {
    this.noticiaServicio.getOne(id).subscribe((data) => {
      this.noticia = data;
      this.empresaServicio.getOne(this.noticia.idEmpresa).subscribe((dato) => {
        this.empresa = dato;
      });
    });
  }
}
