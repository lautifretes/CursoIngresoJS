
/*     LAUTARO FRETES */


/* Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' */

function mostrar()
{
	let edad ;
	let estadoCivil;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad > 17 && estadoCivil == "Soltero") {
		mensaje = "Es soltero y no es menor"
		alert(mensaje)
		
	} 

	
	


}//FIN DE LA FUNCIÓN