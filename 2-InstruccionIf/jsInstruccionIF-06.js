/*        LAUTARO FRETES    */

/* Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		mensaje = "sos mayor de edad"
	
		
	} else if (edad >= 13){
		mensaje = "es adolescente"
		
	} else{
		mensaje = "sos un niño"
		
	}
	alert(mensaje)
	}

	




//FIN DE LA FUNCIÓN