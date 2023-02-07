
/*      LAUTARO FRETES    */


/* Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente. */

function mostrar()
{
	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	mensaje = "no sos adolescente"

	if(edad < 13 || edad > 17 ){

		alert(mensaje)
	}




	
}//FIN DE LA FUNCIÓN