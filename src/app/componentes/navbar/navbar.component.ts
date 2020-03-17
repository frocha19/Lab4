import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  empresa = {id: 1, denominacion: 'Denominacion Empresa', telefono: '123456789', horarioDeAtencion: '6am-4pm PST M-Th, 6am-3pm PST Fri'};
  ngOnInit(): void {
  }

}
