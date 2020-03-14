## Trabajo Practico N° 1 – Laboratorio de Computación 4.
    # 1 Cree las siguientes tablas de base de datos con los siguientes campos:
    	* Tabla: Empresa
    	* Campos: Id:number/PK, Denominación:String(128), Teléfono:String(50), Horario de Atención:String(256), Quienes Somos:String(1024), Latitud:number, Longitud:number, Domicilio:String(256), Email:String(75)
    	* Tabla: Noticia
    	* Campos: Id:number/PK, Título de la noticia:String(128), Resumen de la Noticia:String(1024), Imagen Noticia:String(128), Contenido HTML:String(20480), Publicada:Boolean, Fecha Publicación:Date ,idEmpresa:number/FK.
    
    #2 Codifique las siguientes funcionalidades mediante el lenguaje de programación seleccionado:
	* Administrar Empresa: Alta, baja, modificación y consulta de los datos indicados en la tabla empresa.
	* Administrar Noticia: Alta, baja, modificación y consulta de los datos indicados en la tabla noticia, el modulo deberá contener la posibilidad de ejecutar un “UPLOAD” de una imagen seleccionada en el cliente. Además deberá hacer uso del editor de texto enriquecido tinymce para asignar el valor del campo Contenido HTML.

    # 3 Tomando como bases las plantillas HTML index.html, home.html, detalle.html, búsqueda.html, modifique las plantillas para que tomen la información de las tablas empresa y noticia según corresponda.

## Tareas a Realizar en el BackEnd
	# 1 Crear la Base de Datos de manera local para Empresa y Noticia.
	# 2 Hacer Api Rest para Empresa y Noticia.
	
## Tareas a Realizar en el FrontEnd
	# 1 Crear los Models para Empresa y Noticia.
	# 2 Crear los Servicios para Emprea y Noticia. Estos deben contener consulta SQL para recuperar datos.
	# 3 Crear las Paginas Html para Index, Home, Detalle, Busqueda y Error404. Estas paginas deben ser Reactivas.
	# 4 Configurar las rutas para acceder a dichas paginas.
	# 5 La pagina de Noticia debe poder cargar una imagen.
	# 6 
	
# FrontEndNivelator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
