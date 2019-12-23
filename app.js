// botones articulo 1
let botonMas = document.getElementById("mas");
let botonMenos = document.getElementById("menos");
let botonAgregar = document.getElementById("agregar");

// botones articulo 2
let botonMas2 = document.getElementById("mas2");
let botonMenos2 = document.getElementById("menos2");
let botonAgregar2 = document.getElementById("agregar2");

// etiquetas articulo 1
let cantidad = document.getElementById("cantidad");
let precio = document.getElementById("precio");

// etiquetas articulo 2
let cantidad2 = document.getElementById("cantidad2");
let precio2 = document.getElementById("precio2");

let subtotal = document.getElementById("subtotal");
let total = document.getElementById("total");
let descuento = document.getElementById("descuento");
let precioSubtotal = 0;
let costoEnvio = 5;

// llamar a funciones: articulo 1
botonMas.addEventListener("click",incrementar);
botonMenos.addEventListener("click", decremento);
botonAgregar.addEventListener("click", agregar);

// llamar a funciones: articulo 2
botonMas2.addEventListener("click",incrementar2);
botonMenos2.addEventListener("click", decremento2);
botonAgregar2.addEventListener("click", agregar2);

// funciones articulo 1
function incrementar() {
    cantidad.innerHTML++;
    //console.log(cantidad.innerHTML);
}

function decremento() {
    if (cantidad.innerHTML > 1) {
        cantidad.innerHTML--;
        //console.log(cantidad.innerHTML);
    }
}

function agregar() {
    precioSubtotal += Number(precio.innerHTML) * Number(cantidad.innerHTML)
    subtotal.innerHTML = precioSubtotal;

    total.innerHTML = precioSubtotal + costoEnvio - Number(descuento.innerHTML);
}

// funciones articulo 2
function incrementar2() {
    cantidad2.innerHTML++;
    //console.log(cantidad.innerHTML);
}

function decremento2() {
    if (cantidad2.innerHTML > 1) {
        cantidad2.innerHTML--;
        //console.log(cantidad.innerHTML);
    }
}

function agregar2() {
    precioSubtotal += Number(precio2.innerHTML) * Number(cantidad2.innerHTML)
    subtotal.innerHTML = precioSubtotal;

    total.innerHTML = precioSubtotal + costoEnvio - Number(descuento.innerHTML);
}
