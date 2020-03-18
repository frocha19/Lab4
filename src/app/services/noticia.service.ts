import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Noticia } from '../model/noticia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService extends CommonService<Noticia> {

  protected miUrl = 'http://localhost:9000/api/v1/noticia/';

  public noticias: Noticia[];

  constructor(protected http: HttpClient, private common: CommonService<Noticia>) {
    super(http);
  }

  /*getFive(id: number): Noticia {
    this.common.getLast(id).subscribe( (data) => {
      this.noticias = data;
    });
    return this.noticias;
  }*/
}
