import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(
    private route: Router,
    private noticiaService: NoticiaService) { }

  public textoBuscado = '';
  public noticias: Noticia[];

  ngOnInit(): void {
  }
  goNoticia(id: number) {
    this.route.navigate(['/detalle/' + id]);
  }
  getNoticias() {
    this.noticias = null;
    this.noticiaService.buscarPorNombre(this.textoBuscado).subscribe((dato) => {
      dato.forEach(n => {
        n.resumen_de_la_noticia = n.resumen_de_la_noticia.substring(0, 40).concat('...');
      });
      this.noticias = dato;
    });
  }
}
