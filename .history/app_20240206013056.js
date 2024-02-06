// 2- CREO VARIABLE PARA MANIPULAR HTML
let contenedor = document.querySelector("#contenedor");

// 3- CREAR ELEMENTO SUBTITULO Y LE AGREGO PROPIEDADES
let subtitulo = document.createElement("h2");
subtitulo.innerText = "Árbol de nodos";

// 4- OBTENER EL CUERPO DEL DOCUMENTO
let body = document.body;

// 5- AGREGAR EL NUEVO ELEMENTO AL CUERPO DEL DOCUMENTO
body.appendChild(subtitulo);

// 6- AGREGO IMAGEN
let imagen = document.createElement("img");
imagen.src="https://www.freecodecamp.org/news/content/images/2021/09/Document.jpg";
imagen.width="400";
imagen.alt="árbol de nodos";

// 7- AGREGO ELEMENTOS AL CONTENEDOR
contenedor.append(subtitulo,imagen)

// 13- AGREGO CONSTRUCTOR
const autor={
    nombre:'Steve Garlic',
    descripcion:'Fanático de la tecnología y profesor de las artes de programación con javascript',
    imagen:'./img/icono.jpg'
}

// 9- CREO ESTRUCTURA DEL CODIGO
let columnaTarjeta = document.createElement('div')
columnaTarjeta.className='col'

// 10- CREO TEMPLATE STRING DEL CONTENIDO DE LA TARJETA AUTOR
// 14- AGREGO DATOS DEL CONSTRUCTOR (13)
let tarjetaAutor = ` <div class="card" style="width: 18rem;">
        <img class="card-img-top pt-2" src="${autor.imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${autor.nombre}</h5>
            <p class="card-text">${autor.descripcion}</p>
            <a href="#" class="btn btn-primary">Ver Perfil</a>
        </div>
    </div>`;

    // 11- AGREGO TEMPLATE STRING A columnaTarjeta (HIJO)
    columnaTarjeta.innerHTML = tarjetaAutor;

    // 12- AGREGO columnaTarjeta AL CONTENEDOR (PADRE) MEDIANTE LA SELECCIÓN DEL ID #contenedor_tarjeta
    document.querySelector("#contenedor_tarjeta").append(columnaTarjeta)

    // 16- Creo constante modificarAutor para agregarla al form en index.html, la función recibirá un evento
    const modificarAutor=(event)=>{
        console.log(event);
        event.pre
    }