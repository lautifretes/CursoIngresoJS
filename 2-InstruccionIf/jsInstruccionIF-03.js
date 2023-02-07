
/*            LAUTARO FRETES           		 */



/* Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. */

function mostrar()
{
	let edad;
	let mensaje;
	

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad >= 18) {
		
		mensaje = "sos mayor de edad"
	
		
	}else{
		mensaje = "sos menor de edad"
	}
	
	alert(mensaje)

}//FIN DE LA FUNCIÓN