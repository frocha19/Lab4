## Trabajo Practico N° 1 – Laboratorio de Computación 4
    # 1
    Cree las siguientes tablas de base de datos con los siguientes campos:
    * Tabla:
    Empresa
    * Campos:
    Id entero / Clave Primaria
    Denominación cadena (128)
    Teléfono cadena (50)
    Horario de Atención cadena (256)
    Quienes Somos cadena (1024)
    Latitud decimal
    Longitud decimal
    Domicilio cadena (256)
    Email cadena (75)

    * Tabla:
    Noticia
    * Campos:
    Id entero / Clave Primaria
    Título de la noticia cadena (128)
    Resumen de la Noticia cadena (1024)
    Imagen Noticia cadena (128)
    Contenido HTML cadena (20480)
    Publicada carácter (1) / char (Y/N)
    Fecha Publicación fecha
    idEmpresa entero/ Clave Foránea
    
    # 2
    Codifique las siguientes funcionalidades mediante el lenguaje de programación seleccionado:
* Administrar Empresa: Alta, baja, modificación y consulta de los datos indicados en la tabla empresa.
* Administrar Noticia: Alta, baja, modificación y consulta de los datos indicados en la tabla noticia, el modulo deberá contener la posibilidad de ejecutar un “UPLOAD” de una imagen seleccionada en el cliente. Además deberá hacer uso del editor de texto enriquecido tinymce para asignar el valor del campo Contenido HTML.

    # 3
    Tomando como bases las plantillas HTML index.html, home.html, detalle.html,
búsqueda.html, modifique las plantillas para que tomen la información de las tablas
empresa y noticia según corresponda.