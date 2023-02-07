
/*            LAUTARO FRETES           		 */



/* Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. */

function mostrar()
{
	let edad;
	let mensaje;
	let mensajeUno;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	mensaje = "sos mayor de edad"
	mensajeUno = "sos menor de edad"

	if (edad >= 18) {
		
		alert(mensaje)

	}else{
		alert(mensajeUno)
	}
	

}//FIN DE LA FUNCIÓN