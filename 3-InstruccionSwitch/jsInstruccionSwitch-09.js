//      LAUTARO FRETES


/* Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */



function mostrar()
{
	let precio;
	let estacionDelAño;
	let localidad;
	let porcentaje;
	let precioFinal;
	let mensaje;
	 
	precio = 15000
	estacionDelAño = document.getElementById("txtIdEstacion").value;
	localidad = document.getElementById("txtIdDestino").value;
	porcentaje = 0
	
	
	if(estacionDelAño == "Invierno") {
		
		switch(localidad){
			case "Bariloche":
				porcentaje = 20
				break;
			case "Mar del plata":
				porcentaje = -20
				break;
			default:
				porcentaje = -10
		}
	}else if (estacionDelAño == "Verano"){

		switch (localidad) {
			case "Bariloche":
				porcentaje = -20
				break;
			case "Mar del plata":
				porcentaje = 20
				break;
			default:
				porcentaje = 10
		}
	}else {
		switch (localidad) {
			case "Cordoba":
				porcentaje = 0
				break;
			default:
				porcentaje = 10
		}
	}
	
	precioFinal = precio + (precio * porcentaje/100)
	mensaje = "El precio final es $" + precioFinal 
alert(mensaje);

}//FIN DE LA FUNCIÓN