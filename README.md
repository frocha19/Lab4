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
	