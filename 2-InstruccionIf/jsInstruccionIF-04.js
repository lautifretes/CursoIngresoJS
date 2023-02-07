
/*    LAUTARO FRETES    */



/* Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) . */



function mostrar()
{
	let edad;
	let mensaje;
	
	edad = parseInt(document.getElementById("txtIdEdad").value)
	mensaje = "sos un adolescente"

	if(edad >= 13 && edad <= 17){
		
		alert(mensaje)

	}

}//FIN DE LA FUNCIÓN