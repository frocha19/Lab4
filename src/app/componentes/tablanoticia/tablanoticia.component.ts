import { NoticiaService } from './../../servicios/noticia.service';
import { Noticia } from './../../model/noticia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablanoticia',
  templateUrl: './tablanoticia.component.html',
  styleUrls: ['./tablanoticia.component.css']
})
export class TablanoticiaComponent implements OnInit {

  public noticias: Noticia[];
  indice:number;

  public noticiaSeleccionada : Noticia = {
    id: 0,
    titulo_de_la_noticia: '',
    resumen: '',
    imagen_noticia: '',
    contenido_html: '',
    publicada: '',
    fecha_publicacion: null,
    id_empresa_id: null

  };

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit() {
    this.getAllNoticias();
  }

  getAllNoticias() {
    this.noticiaService.getAll().subscribe( res => {
      this.noticias = res;
    }, 
    err => {
      alert ('Error al traer todas las noticias: '+ err);
    });
  }

  delete(noticia: Noticia) {
    const opcion = confirm('¿Desea eliminar este registro?');
    if (opcion === true) {
      this.noticiaService.delete(noticia.id).subscribe(
        res => {
          alert('El registro fue eliminado con éxito');
          const indexNoticia = this.noticias.indexOf(noticia);
          this.noticias.splice(indexNoticia, 1);
        },
        err => {
          alert ('Error al eliminar el registro seleccionado: '+ err);
        });
      }
    }

  onPreUpdate(noticia: Noticia) {
    this.noticiaSeleccionada = noticia;
    this.indice = this.noticias.indexOf(noticia);
  }

}
