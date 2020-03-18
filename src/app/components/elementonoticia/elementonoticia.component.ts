import { NoticiaService } from './../../services/noticia.service';
import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-elementonoticia',
  templateUrl: './elementonoticia.component.html',
  styleUrls: ['./elementonoticia.component.css']
})
export class ElementonoticiaComponent implements OnInit {

  noticia: Noticia = {
    id: 0,
    titulo_de_la_noticia: '',
    resumen_de_la_noticia: '',
    imagen_noticia: '',
    contenido_html: '',
    publicada: '',
    fecha_publicacion: null,
    idEmpresa: null
  }

  constructor(private noticiaService: NoticiaService, private router: Router, private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe((data) => {
      if (data['id'] !== "nueva") {
        this.getOne(data['id']);
      }
    })
  }

  ngOnInit() {
  }

  save() {
    this.actRoute.params.subscribe((data) => {
      if (data['id'] === "nueva") {
        this.add();
      } else {
        this.update(data['id']);
      }
    })
  }

  add() {
    this.noticiaService.post(this.noticia).subscribe(
      res => {
        alert('Noticia agregada correctamente');
        this.router.navigate(["tabla/noticia"]);
      },
      err => {
        alert('Ocurrió un error al agregar la noticia. Verifique los campos.');
      }
    );
  }

  update(id: number) {
    this.noticiaService.put(id, this.noticia).subscribe(
      res => {
        alert('La noticia fue actualizada con éxito');
        this.router.navigate(["tabla/noticia"]);
      },
      err => {
        alert('Ocurrió un error al actualizar noticia. Verifique los campos.');
      }
    );
  }

  getOne(id: number) {
    this.noticiaService.getOne(id).subscribe((data) => {
      this.noticia = data;
    }, err => {
      alert('Error al traer los datos de noticia: getOne');
    })
  }

}