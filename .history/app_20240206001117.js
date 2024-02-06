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

// 9- COPIA DEL CODIGO DESDE index.html
{/* <div class="col">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top pt-2" src="./img/icono.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Esteban Gabbes</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
            <a href="#" class="btn btn-primary">Ver Perfil</a>
        </div>
    </div>
</div> */}

// 10- CREO ESTRUCTURA DEL CODIGO

let columnaTarjeta = docum