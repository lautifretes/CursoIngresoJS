//    LAUTARO FRETES


/* Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */


function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace FRIO, abrigate."
			break;
		case "Cataratas":
			mensaje = "Hace CALOR, toma agua."
			break;
		case "Mar del plata":
			mensaje = "Depende la epoca del año"
			break;
	}
	alert(mensaje)

}//FIN DE LA FUNCIÓN