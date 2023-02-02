/* Lautaro Fretes



2.	Para el departamento de Construcción:
A.  mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    //A.  mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
    //      perimetro = base*2 + altura*2

    let largoTerreno;
    let anchoTerreno;
    let perimetro;
    let material;
    let mensaje;

    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    perimetro    = largoTerreno * 2 + anchoTerreno * 2;
    material     = perimetro * 3;
    mensaje      = "metros de alambre a comprar " + material

    console.log(mensaje);
}

function Circulo() {
    //    B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
    //          perimetro de un circulo = (2 * 3.14 * radio)

    let perimetroCirculo;
    let radio;
    let material;
    let cantHilos;
    let mensaje;
    

    cantHilos        = 3
    radio            = parseFloat(document.getElementById("txtIdRadio").value);
    perimetroCirculo = 2 * 3.14 * radio;
    material         = perimetroCirculo * cantHilos;
    mensaje          = "Los metros de alamabre a comprar son " + material

    console.log(mensaje)

}
function Materiales() {
    //C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

    // Area o superficie = (largo * ancho)

    let largoTerreno;
    let anchoTerreno;
    let areaTerreno;
    let arena;
    let cal;
    let mensaje;


    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    areaTerreno  = largoTerreno * anchoTerreno;
    arena        = areaTerreno * 3
    cal          = areaTerreno * 2
    mensaje      = " el area del terreno es "+ areaTerreno + " se necesitan "+arena + " bolsas de arena y " + cal + " bolsas de cal para hacer un contrapiso"

    console.log(mensaje);

}