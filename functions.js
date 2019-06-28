//llamada de los elementos html
/*
eventos onClick
recogida datos campos input
lectura y pintado de datos input
añadido de más productos
suma productos :¿array?
pintado final: suma y productos en div
reset y todo en blanco

*/
let button1 = document.getElementById("boton1");
let button2 = document.getElementById("boton2");

//recogida inputs

let recogeDatos1 = document.getElementById("name");
let recogeDatos2 = document.getElementById("money");

//creacion array base datos

let baseDeDatos = [
    {
        id: 1,
        nombre: 'Zapatos',
        precio: 39.95,
        iva: 8,
        Total: 47.95
    },
    {
        id: 2,
        nombre: 'Bolsos',
        precio: 29.95,
        iva: 6,
        Total: 35.95
    },
    {
        id: 3,
        nombre: 'Cinturones',
        precio: 19.95,
        iva: 4,
        Total: 23.95
    },
    {
        id: 4,
        nombre: 'Chaquetas',
        precio: 69.95,
        iva: 12,
        Total: 81.95
    }

]