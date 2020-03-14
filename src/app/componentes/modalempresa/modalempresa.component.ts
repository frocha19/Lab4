import { Component, OnInit, ViewChild, ElementRef, Host, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { TablaempresaComponent } from '../tablaempresa/tablaempresa.component';
import { Empresa } from 'src/app/model/empresa';

@Component({
  selector: 'app-modalempresa',
  templateUrl: './modalempresa.component.html',
  styleUrls: ['./modalempresa.component.css']
})


export class ModalempresaComponent implements OnInit {

  @ViewChild('btnClose', { static: true }) btnClose: ElementRef;

  public formEmpresa: FormGroup;
  public empresa: any;
  public edit = false;

  constructor(private empresaService: EmpresaService,
    @Host() private tabla: TablaempresaComponent,
    private formBuilder: FormBuilder) { }
    

  @Input() set empresaSeleccionada(valor) {
    this.onBuild();
    if (valor) {
      this.empresa = valor;
      this.formEmpresa.patchValue({
        id: valor.id,
        denominacion: valor.denominacion,
        telefono: valor.telefono,
        horarioDeAtencion: valor.horarioDeAtencion,
        latitud: valor.latitud,
        longitud: valor.longitud,
        domicilio: valor.domicilio,
        email: valor.email
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
    this.formEmpresa = this.formBuilder.group({
      id: null,
      denominacion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
      horarioDeAtencion: new FormControl('', [Validators.required]),
      quienesSomos: new FormControl('', [Validators.required]),
      latitud: new FormControl('', [Validators.required]),
      longitud: new FormControl('', [Validators.required]),
      domicilio: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  onSave(formEmpresa: FormGroup): void {
    if (formEmpresa.value.id === 0) {
      // Agregar
      this.add(formEmpresa.value);
    } else {
      //Actualizar
      this.update(formEmpresa.value);
    }
    this.btnClose.nativeElement.click();
    this.tabla.indice = null;
  }

  add(empresa: Empresa) {
    this.empresaService.post(empresa).subscribe(
      res => {
        this.tabla.empresas.push(res);
      },
      err => {
        alert('Ocurrió un error al agregar la persona');
      }
    );
  }

  update(empresa: Empresa) {
    this.empresaService.put(empresa.id, empresa).subscribe(
      res => {
        alert('La empresa fue actualizada con éxito');
        this.tabla.empresas.splice(this.tabla.indice, 1, empresa);
      },
      err => {
        alert('Ocurrió un error al actualizar persona');
      }
    );
  }

  onClose() {
    this.empresaSeleccionada = {
      id: 0,
      denominacion: '',
      telefono: null,
      horarioDeAtencion: '',
      quienesSomos: '',
      latitud: null,
      longitud: null,
      direccion: '',
      email: ''
    };
  }

}