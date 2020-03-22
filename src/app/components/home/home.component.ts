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
  constructor(
    private route: Router,
    private noticiaService: NoticiaService,
    private empresaService: EmpresaService,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.params.subscribe(data => {
      if (data['id']) {
        this.getOne(data['id']);
      }
    });
  }

  public noticias: Noticia[];
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
  public keyword = '';
  public data: Noticia[];

  ngOnInit(): void {
    this.getNoticias();
  }

  getOne(id: number) {
    this.empresaService.getOne(id).subscribe(
      data => {
        this.empresa = data;
      },
      err => {
        alert('Error al traer los datos de empresa: getOne');
      }
    );
  }
  getFive(id: number) {
    this.noticiaService.getLast(id).subscribe((data) => {
      this.noticias = data;
    }, err => {
      alert('Error al traer los datos de noticia: getFive');
    });
  }
  goNoticia(id: number) {
    this.route.navigate(['/detalle/' + id]);
  }
  getNoticias() {
    this.noticiaService.getAll().subscribe((dato) => {
      this.data = dato;
    });
  }
  selectEvent(item) {
    this.goNoticia(item.id);
  }
}
