/* 

    LAUTARO FRETES

2: Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
          Tipo validad("arena";"cal";"cemento")
          Cantidad de bolsas(0-300),
          Precio por bolsa (más de cero y menor a 10000 ),
          al terminar la compra el cliente accede a un descuento segun las bolsas en total
            Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
            Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
                a)
                El importe total a pagar , bruto sin descuento y...
                b)
                el importe total a pagar con descuento(solo si corresponde)
                d)
                Informar la bolsa mas cara de Cal y la mas barata de Cemento.
                e)
                Cuantas bolsas de arena se compraron en total, y el promedio por compra.
}*/

function mostrar() {
  let respuesta;
  let productos;
  let cantBolsas;
  let precioPorBolsa;
 
 
  let acuCemento;
  let acuArena;
  let acuCal;
  let totalAPagarBruto;
  let acuPrecioCal;
  let acuPrecioArena;
  let acuPrecioCemento;
  let totalAPagarConDescuento;
  let descuento;
  
  let bolsaMasCaraDeCal;
  let bolsaMasBarataDeCemento;
  let flagBolsMasBarataDeCemento;
  let flagBolsaMasCaraDeCal;
  let contBolsasArena;
  let promedio;

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


  contBolsasArena = 0;
  bolsaMasCaraDeCal = 0;
  bolsaMasBarataDeCemento = 0;
  flagBolsMasBarataDeCemento == true;
  flagBolsaMasCaraDeCal == true;
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
        contBolsasArena ++;
        acuArena = acuArena + cantBolsas
        acuPrecioArena = acuPrecioArena + precioPorBolsa
        
        break;
      case "cal":
        if (flagBolsaMasCaraDeCal == true) {
          bolsaMasCaraDeCal = precioPorBolsa;
          flagBolsaMasCaraDeCal = false
        } else {
          if (bolsaMasCaraDeCal < precioPorBolsa) {
            bolsaMasCaraDeCal = precioPorBolsa;
          }
        }
        acuCal = acuCal + cantBolsas
        acuPrecioCal = acuPrecioCal + precioPorBolsa
        break;
      default:
        if (flagBolsMasBarataDeCemento == true) {
          bolsaMasBarataDeCemento = precioPorBolsa;
          flagBolsMasBarataDeCemento = false;
        } else {
          if (bolsaMasBarataDeCemento < precioPorBolsa) {
            bolsaMasBarataDeCemento = precioPorBolsa;
          }else{
            bolsaMasBarataDeCemento = precioPorBolsa;
          }
        }
        acuCemento = acuCemento + cantBolsas
        acuPrecioCemento = acuPrecioCemento + precioPorBolsa
    }
    respuesta = confirm("quiere seguir?")
  }

  if (cantBolsas > 45) {
    descuento = -30;
  } else {
    if (cantBolsas > 15) {
      descuento = -10;
    }
    else {
      descuento = 0;
    }
  }

  if (productos == "arena"){
    promedio = acuArena / contBolsasArena;
  }else{
    promedio = "no se compraron bolsas de arena";
  }
  
  cantBolsas = acuArena + acuCemento + acuCal;
  totalAPagarBruto = acuPrecioArena + acuPrecioCal + acuPrecioCemento;
  totalAPagarConDescuento = totalAPagarBruto + (totalAPagarBruto * descuento / 100);
  

  console.log("total a pagar sin descuento " + totalAPagarBruto);
  console.log("importe a pagar con descuento " + totalAPagarConDescuento);
  console.log("la bolsa mas cara de cal vale: "+ bolsaMasCaraDeCal);
  console.log("la bolsa mas barata de cemento vale: "+ bolsaMasBarataDeCemento);
  console.log("se compraron "+ acuArena+" bolsas de arena");
  console.log("el promedio de compras de arena es: " + promedio);

}
