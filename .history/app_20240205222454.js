// 2- CREO VARIABLE PARA MANIPULAR HTML
let contenedor = document.querySelector("#contenedor");

// 3- CREAR ELEMENTO SUBTITULO Y LE AGREGO PROPIEDADES
let subtitulo = document.createElement("h3");
subtitulo.innerText = "Árbol de nodos";

// 4- OBTENER EL CUERPO DEL DOCUMENTO
let body = document.body;

// 5- AGREGAR EL NUEVO ELEMENTO AL CUERPO DEL DOCUMENTO
body.appendChild(subtitulo)