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

//let recogeDatos1 = document.getElementById("name");
//let recogeDatos2 = document.getElementById("money");
let lista = document.getElementById("productos");

//creacion array base datos

let baseDeDatos = [
    {
        id: 1,
        nombre: 'Zapatos',
        precio: 39.95,//array paralelos mirar
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

];

let productosAnhadidos = [];

function anyadirProducto (){
lista.options[0] = new Option("--selecciona---");
lista.options[0].value = 0;// indice de datos seleccionados

    for (let producto of baseDeDatos){
        let option = new Option(producto.nombre);
        option.value = producto.id;
        lista.add(option);
    }
}

function quitarProducto(){

}

function anyadoCarro(){

}

function quitarCarro(){

}

function sumarProducto(){

}

function restarProducto(){
   
}
function anhadirProducto(){

     let id = lista[lista.selectedIndex].value;// cogemos dato seleccionado  y recogemos su valor
    let nombre = baseDeDatos[lista.selectedIndex].nombre;//corchetes al mirar declaracion ayuda a saber siu es un array de objetos
    let precio = baseDeDatos[lista.selectedIndex].precio;
// null and false staments in javascript  buscar
let iva = baseDeDatos[lista.selectedIndex].iva;

    productosAnhadidos.push( { nombre : nombre, precio : precio, id : id});
    printTabla
}
function clearTabla(){
   let tabla = document.querySelector('table:nth child(1)');//mientras exista el primer hijo, evaluacion booleana, if**frist null=false, se cierra bucle,
   //if tabla.first != true: verdadero
    while(tabla.firstChild){
        tabla.removeChild
    }
}

function printTabla(){

}

function init(){
    anyadirProducto();
    button1.addEventListener('click', anhadirProducto() );

}
window.addEventListener( 'load', init);