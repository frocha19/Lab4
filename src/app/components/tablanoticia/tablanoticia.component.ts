import { EmpresaService } from './../../services/empresa.service';
import { Router } from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from './../../model/noticia';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/model/empresa';

@Component({
  selector: 'app-tablanoticia',
  templateUrl: './tablanoticia.component.html',
  styleUrls: ['./tablanoticia.component.css']
})
export class TablanoticiaComponent implements OnInit {

  public noticias: Noticia[];

  empresas: Empresa[];

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

  constructor(private noticiaService: NoticiaService, private router: Router, private empresaService : EmpresaService) { }

  ngOnInit() {
    this.getAllNoticias();
    this.getAllEmpresas();
  }

  getAllEmpresas() {
    this.empresaService.getAll().subscribe( res => {
      this.empresas = res;
    },
    err => {
      alert ('Error al traer todas las empresas: ' + err);
    });
  }

  getAllNoticias() {
    this.noticiaService.getAll().subscribe( res => {
      this.noticias = res;
    },
    err => {
      alert ('Error al traer todas las noticias: ' + err);
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
          alert ('Error al eliminar el registro seleccionado: ' + err);
        });
      }
    }

  agregar(){
    this.router.navigate(["noticia/nueva"]);
  }

  update(id:number){
    this.router.navigate(["noticia/"+id]);
  }

}
