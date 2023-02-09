//    LAUTARO FRETES //


/* Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche */

function mostrar()
{
	let estacionDelAnio;
	let destino;
	let mensaje;

	estacionDelAnio = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacionDelAnio) {
		case "Invierno":
			switch(destino) {
				case "Bariloche":
					mensaje = "Se viaja."
					break;
				default:
					mensaje = "No se viaja."
			}
			break;
		case "Verano":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja."
					break;
				default:
					mensaje = "Se viaja a Mar del plata y Cataratas solamente"
			}
			break;
		case "Otoño":
			switch(destino) {
				case "Bariloche":
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					mensaje = "Se viaja"
			}
			break;
		case "Primavera":
			switch(destino){
				case "Bariloche":
					mensaje = "No se viaja"
					break;
				default: 
				mensaje = "Se viaja"
			}
	}
	alert(mensaje)

}//FIN DE LA FUNCIÓN