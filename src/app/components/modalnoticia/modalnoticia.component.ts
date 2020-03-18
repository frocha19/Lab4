import { TablanoticiaComponent } from './../tablanoticia/tablanoticia.component';
import { NoticiaService } from '../../services/noticia.service';
import { Component, OnInit, ViewChild, ElementRef, Host, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-modalnoticia',
  templateUrl: './modalnoticia.component.html',
  styleUrls: ['./modalnoticia.component.css']
})
export class ModalnoticiaComponent implements OnInit {

  @ViewChild('btnClose', { static: true }) btnClose: ElementRef;

  public formNoticia: FormGroup;
  public noticia: any;
  public edit = false;

  constructor(private noticiaService: NoticiaService,
    @Host() private tabla: TablanoticiaComponent,
    private formBuilder: FormBuilder) { }

  @Input() set noticiaSeleccionada(valor) {
    this.onBuild();
    if (valor) {
      this.noticia = valor;
      this.formNoticia.patchValue({
        id: valor.id,
        titulo_de_la_noticia: valor.titulo_de_la_noticia,
        resumen: valor.resumen,
        imagen_noticia: valor.imagen_noticia,
        contenido_html: valor.contenido_html,
        publicada: valor.publicada,
        fecha_publicacion: valor.fecha_publicacion,
        id_empresa_id : valor.id_empresa_id
      });
      if (valor.id !== 0) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    }
  }

  ngOnInit() {
    this.onBuild();
  }

  onBuild() {
    this.formNoticia = this.formBuilder.group({
      id: null,
      titulo_de_la_noticia: new FormControl('', [Validators.required]),
      resumen: new FormControl('', [Validators.required]),
      imagen_noticia: new FormControl('', [Validators.required]),
      contenido_html: new FormControl('', [Validators.required]),
      publicada: new FormControl('', [Validators.required]),
      fecha_publicacion: new FormControl('', [Validators.required]),
      id_empresa_id: new FormControl('', [Validators.required]),
    });
  }

  onSave(formNoticia: FormGroup): void {
    if (formNoticia.value.id === null) {
      // Add
      this.add(formNoticia.value);
    } else {
      // Update
      this.update(formNoticia.value);
    }
    this.btnClose.nativeElement.click();
    this.tabla.indice = null;
  }

  add(noticia: Noticia) {
    this.noticiaService.post(noticia).subscribe(
      res => {
        this.tabla.noticias.push(res);
      },
      err => {
        alert('Ocurrió un error al agregar la noticia');
      }
    );
  }

  update(noticia: Noticia) {
    this.noticiaService.put(noticia.id, noticia).subscribe(
      res => {
        alert('La noticia fue actualizada con éxito');
        this.tabla.noticias.splice(this.tabla.indice, 1, noticia);
      },
      err => {
        alert('Ocurrió un error al actualizar noticia');
      }
    );
  }

  onClose() {
    this.noticiaSeleccionada = {
      id: 0,
      titulo_de_la_noticia: '',
      resumen: '',
      imagen_noticia: '',
      contenido_html: '',
      publicada: '',
      fecha_publicacion: null,
      id_empresa_id: null
    };
  }

}
