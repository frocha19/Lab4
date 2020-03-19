import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmpresaService } from './../../services/empresa.service';
import { Empresa } from './../../model/empresa';
import { NoticiaService } from './../../services/noticia.service';
import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-elementonoticia',
  templateUrl: './elementonoticia.component.html',
  styleUrls: ['./elementonoticia.component.css']
})
export class ElementonoticiaComponent implements OnInit {

  public empresas: Empresa[];
  public respuestaImagenEnviada;
  public resultadoCarga;
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
  miUrl = 'http://localhost:9000/api/v1/noticia/';

  constructor(private noticiaService: NoticiaService, private router: Router,
    private actRoute: ActivatedRoute, private empresaService: EmpresaService, private http: HttpClient) {
    this.actRoute.params.subscribe((data) => {
      if (data['id'] !== "nueva") {
        this.getOne(data['id']);
      }
    })
  }

  ngOnInit() {
    this.getAllEmpresas();
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

  getAllEmpresas() {
    this.empresaService.getAll().subscribe(res => {
      this.empresas = res;
    },
      err => {
        alert('Error al traer todas las empresas para vincular la noticia: ' + err);
      });
  }

  fileChange(event) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        this.http.post(this.miUrl, formData, httpOptions)
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
}

}