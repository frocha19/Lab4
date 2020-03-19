import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../services/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../model/noticia';
import { MouseEvent } from '@agm/core';

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
  // Declaraciones de Google Maps
  zoom = 11;
  lat = -73.9874068;
  lng = 40.643180;
  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ];
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
    }
  ];
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

  ngOnInit(): void {}

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

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  // Google Maps
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
