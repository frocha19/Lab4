import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../services/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../model/noticia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private noticiaService: NoticiaService, private empresaService: EmpresaService, private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe((data) => {
      if (data['id']) {
        this.getOne(data['id']);
      }
    });
  }

  public noticias: Noticia[] = [
    {
      id: 0,
      titulo_de_la_noticia: 'Noticia 0',
      resumen_de_la_noticia: 'Noticia 0',
      imagen_noticia: 'Noticia 0',
      contenido_html: 'NNoticia 0',
      publicada: 'Noticia 0',
      fecha_publicacion: new Date(),
      idEmpresa: 1
    },
    {
      id: 1,
      titulo_de_la_noticia: 'Noticia 1',
      resumen_de_la_noticia: 'Noticia 1',
      imagen_noticia: 'Noticia 1',
      contenido_html: 'NNoticia 1',
      publicada: 'Noticia 1',
      fecha_publicacion: new Date(),
      idEmpresa: 1
    },
    {
      id: 2,
      titulo_de_la_noticia: 'Noticia 2',
      resumen_de_la_noticia: 'Noticia 2',
      imagen_noticia: 'Noticia 2',
      contenido_html: 'NNoticia 2',
      publicada: 'Noticia 2',
      fecha_publicacion: new Date(),
      idEmpresa: 1
    },
    {
      id: 3,
      titulo_de_la_noticia: 'Noticia 3',
      resumen_de_la_noticia: 'Noticia 3',
      imagen_noticia: 'Noticia 3',
      contenido_html: 'NNoticia 3',
      publicada: 'Noticia 3',
      fecha_publicacion: new Date(),
      idEmpresa: 1
    },
    {
      id: 4,
      titulo_de_la_noticia: 'Noticia 4',
      resumen_de_la_noticia: 'Noticia 4',
      imagen_noticia: 'Noticia 4',
      contenido_html: 'NNoticia 4',
      publicada: 'Noticia 4',
      fecha_publicacion: new Date(),
      idEmpresa: 1
    },
  ];
  public empresa: Empresa;

  ngOnInit(): void {
  }

  getOne(id: number) {
    this.empresaService.getOne(id).subscribe((data) => {
      this.empresa = data;
    }, err => {
      alert('Error al traer los datos de empresa: getOne');
    });
  }
  getFive() {
    /*this.noticiaService.getFive(id).subscribe((data) => {
      this.noticias = data;
    }, err => {
      alert('Error al traer los datos de noticia: getFive');
    });*/
  }
  goNoticia(id: number) {
    this.route.navigate(['/detalle/' + id]);
  }
}
