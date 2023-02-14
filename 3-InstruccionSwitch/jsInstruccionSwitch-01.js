// 				LAUTARO FRETES

/* Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */



function mostrar()
{
	let mesDelAno;
	let mensaje;

	mesDelAno = document.getElementById("txtIdMes").value;

	switch(mesDelAno){
		case "Enero":
			mensaje = "que comiences bien el año!!!"
			break;
		case "Marzo":
			mensaje = "a clases!!!."
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!"
			break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!."
			break;
		default:
			mensaje = "mes aburrido" 
	}
	alert(mensaje)


}//FIN DE LA FUNCIÓN