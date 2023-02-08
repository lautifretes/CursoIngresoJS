/*      LAUTARO FRETES  */

/* Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive */



function mostrar()
{
	let numero;
	let mensaje;
	
	numero = Math.ceil(Math.random()*10)
	mensaje = "el numero random es " + numero
	console.log(mensaje)

	/* alert("ok"); */	

}//FIN DE LA FUNCIÓN




//    La función Math.floor() redondea al entero inferior.

//    La funcion Math.ceil() redondea al entero superior.