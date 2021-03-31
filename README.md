# New York Times Books

### Proyecto de Single Page Application (SPA) creado con Angular y la API del New York Times.

Esta aplicación ha sido desarrollada como un ejercicio práctico dentro del módulo de Desarrollo Web en Entorno Cliente, de segundo curso del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web, en el **[I.E.S. Polígono Sur de Sevilla](http://iespoligonosur.org/ "I.E.S. Polígono Sur")**.

El objetivo de este trabajo práctico es el de crear una Single Page Application (SPA) con Angular que haga llamadas a una API y utilice los datos recibidos. En este caso se ha elegido **[la API de The New York Times](https://developer.nytimes.com/ "The New York Times Developer Network")**, en concreto **[los sets de datos de la sección de libros](https://developer.nytimes.com/docs/books-product/1/overview "NYT Books API")** del periódico.

1. [Estructura del programa](#1)
2. [Antes de empezar](#2)
3. [Ejecución](#3)
4. [Funcionamiento](#4)
5. [Funciones en desarrollo](#5)

### <a name="1"></a>Estructura del programa

El código provisto en este repositorio es la carpeta **_src_** del proyecto de Angular. Dentro de dicho directorio se encuentra un subdirectorio **_app_**, en el que se incluyen los distintos componentes de la aplicación (_autores_, _lista_, _listas_, _home_, _navbar_, _wishilist_). En él, además, se incluye el directorio **_services_**, que contiene el archivo _books.services.ts_, que hace las distintas llamadas a la API.

> NOTA: La ubicación del directorio **_src_** se explica en el apartado [3. Ejecución](#3), mientras que las distintas funciones se detallan en el apartado [4. Funcionamiento](#4).

### <a name="2"></a>Antes de empezar

Para ejecutar la aplicación, primero debemos tener instalado en nuestro sistema el gestor de paquetes NPM, el entorno de ejecución NodeJS y el framework de desarrollo Angular.

* Instalación en Windows y MacOS

**[En la web de NodeJS disponemos de instaladores](https://nodejs.org/en/download/ "NodeJS downloads")** tanto para Windows como para MacOS. Al instalar NodeJS estaremos instalando también npm.

* Instalación en Linux (Debian / Ubuntu)

Primero instalamos NodeJS y npm.

```sh
~$ sudo apt update
~$ sudo apt install nodejs
~$ sudo apt install npm
```

A continuación comprobamos la instalación y la versión que hemos instalado.

```sh
~$ npm -v
~$ nodejs -v
```

Es conveniente actualizar a la última versión estable, para lo cual instalamos **_n_**, creamos los enlaces simbólicos de directorios y comprobamos la versión instalada.

```sh
~$ sudo npm install -g n
~$ sudo n stable
~$ sudo ln -sf /usr/local/n/versions/node/[VERSIÓN INSTALADA]/bin/node /usr/bin/node
~$ nodejs -v
```

Por último instalamos Angular CLI.

```sh
~$ sudo npm install -g @angular/cli
```

Una vez configurado el entorno de ejecución, es recomendable instalar el IDE **[Visual Studio Code](https://code.visualstudio.com/ "Visual Studio Code")**, tanto si vas a trabajar en desarrollo sobre el proyecto como si eres usuario de Windows, ya que VSC incluye una consola _bash_ que te permitirá ejecutar los comandos de npm y Angular CLI como si estuvieras en Linux o MacOS.

### <a name="3"></a>Ejecución

Primero debemos crear un nuevo proyecto con Angular CLI.

```sh
~$ ng new nyt-books
```
Luego descargamos o clonamos este repositorio.

```sh
~$ git clone https://github.com/jesusrodriguezg/nyt-books.git
```

A continuación debemos sustituir el directorio _nyt-books/src_ con el directorio _src_ que has descargado o clonado de este repositorio. Una vez hecho, ya podemos lanzar la aplicación, ejecutando desde la consola los siguientes comandos.

```sh
~$ cd nyt-books/
~$ ng serve
```

Una vez haya compilado todo el proyecto, debemos abrir desde el navegador la ruta ```localhost:4200```.

### <a name="4"></a>Funcionamiento

La aplicación consta de varias secciones y funcionalidades. Al abrirla, encontramos la portada, con un resumen del proyecto. En la parte superior tenemos la barra de navegación, con enlaces a los distintos apartados.

* **Lists**: despliega una tabla con las distintas listas de libros del New York Times; junto a cada una de ellas hay un botón que nos lleva a una subpágina donde se muestran los libros incluidos en esa lista; debajo de cada libro, encontremos un botón para añadirlo a la **lista de deseos**.
* **Wishlists**: nuestra lista de deseos, donde se van incluyendo los distintos libros que vamos añadiendo manualmente (y que podemos eliminar haciendo clic en el botón correspondiente).
* **Búsqueda por autor**: si introducimos el nombre de un autor (p.e., Stephen King) en la barra de búsqueda de arriba a la derecha, la aplicación nos devuelve todos los libros de dicho autor en una vista distinta a las anteriores; en cada libro de dicho autor aparece un enlace a la reseña que en su día publicó el New York Times.

### <a name="5"></a>Funciones en desarrollo / mejoras

Algunas funciones que se contemplan para el futuro son:

* Inclusión de un formulario de contacto reactivo que nos remita el mensaje a una dirección de correo determinada.
* Corrección de errores, optimización de código y mejoras de diseño.

> Aunque esto es un proyecto de clase y su funcionamiento, diseño y alcance es limitado y básico, cualquier comentario, sugerencia, ayuda o mejora son bienvenidos.