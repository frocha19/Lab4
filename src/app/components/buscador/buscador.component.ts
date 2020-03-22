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

  public keyword = '';
  public data: Noticia[];

  ngOnInit(): void {
    this.getNoticias();
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
