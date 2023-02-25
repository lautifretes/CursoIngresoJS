/*

            LAUTARO FRETES

Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */



function mostrar() {
  let respuesta;
  let productos;
  let cantBolsas;
  let precioPorBolsa;
  let productoMasCaro;
  let mensaje;
  let acuCemento;
  let acuArena;
  let acuCal;
  let totalAPagarBruto;
  let acuPrecioCal;
  let acuPrecioArena;
  let acuPrecioCemento;
  let totalAPagarConDescuento;
  let descuento;
  let flagProductoMasCaro;
  let nombreProductoMasCaro;

  acuCemento = 0;
  acuArena = 0;
  acuCal = 0;
  totalAPagarConDescuento = 0;
  acuPrecioCal = 0;
  acuPrecioArena = 0;
  acuPrecioCemento = 0;
  acuPrecio = 0;
  descuento = 0;
  mayorCantidadDeProdcutos = 0;
  flagProductoMasCaro = true;

  respuesta = true;

  while (respuesta) {
    productos = prompt("ingrese el producto deseado: 'arena' - 'cal' - 'cemento'", "cemento");
    while (productos != 'arena' && productos != 'cal' && productos != 'cemento') {
      productos = prompt("ERROR, ingrese el producto deseado: 'arena' - 'cal' - 'cemento'");
    }

    cantBolsas = parseInt(prompt("ingrese la cantidad de bolsas", "20"));
    while (isNaN(cantBolsas) || cantBolsas < 0 || cantBolsas > 100) {
      cantBolsas = parseInt(prompt("ERROR, ingrese una cantidad valida entre '1' y '100'"));
    }

    precioPorBolsa = parseFloat(prompt("ingrese el precio ente '100' y '1000'", "500"));
    while (isNaN(precioPorBolsa) || precioPorBolsa < 100 || precioPorBolsa > 1000) {
      precioPorBolsa = parseFloat(prompt("ERROR, ingrese el precio ente '100' y '1000'"));
    }
    switch (productos) {
      case "arena":
        acuArena = acuArena + cantBolsas
        acuPrecioArena = acuPrecioArena + precioPorBolsa
        break;
      case "cal":
        acuCal = acuCal + cantBolsas
        acuPrecioCal = acuPrecioCal + precioPorBolsa
        break;
      default:
        acuCemento = acuCemento + cantBolsas
        acuPrecioCemento = acuPrecioCemento + precioPorBolsa
    }
    if (flagProductoMasCaro == true) {
      productoMasCaro = precioPorBolsa;
      nombreProductoMasCaro = productos;
      flagProductoMasCaro = false;
    } else {
      if (productoMasCaro < precioPorBolsa) {
        productoMasCaro = precioPorBolsa;
        nombreProductoMasCaro = productos;
      }
    }
    respuesta = confirm("quiere seguir?")
  }

  
  if( acuArena > acuCal && acuArena > acuCemento){
    mensaje =  "arena"
  }else{
    if(acuCal > acuCemento && acuCal > acuArena){
      mensaje = "cal"
    }else{
      mensaje = "cemento"
    }
  }
  if (cantBolsas >30) {
    descuento = -25;
  } else {
    if (cantBolsas > 10) {
      descuento = -15;
    }
    else {
      descuento = 0;
    }
  }
  cantBolsas = acuArena + acuCemento + acuCal;
  totalAPagarBruto = acuPrecioArena + acuPrecioCal + acuPrecioCemento;
  totalAPagarConDescuento = totalAPagarBruto + (totalAPagarBruto * descuento / 100);

  console.log("total a pagar sin descuento " + totalAPagarBruto);
  console.log("importe a pagar con descuento " + totalAPagarConDescuento);
  console.log("el producto con mas cantidad de bolsas es: "+ mensaje);
  console.log("el producto mas caro es: " + nombreProductoMasCaro);

}
