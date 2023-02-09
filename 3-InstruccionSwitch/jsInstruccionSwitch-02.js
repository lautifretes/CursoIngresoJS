//    LAUTARO FRETES

/* Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */




function mostrar()
{
	let mesDelAno;
	let mensaje;

	mesDelAno = document.getElementById("txtIdMes").value;


	switch (mesDelAno){
		case "Julio" : 
		case "Agosto":  
		case "Septiembre":
		mensaje = "Abrigate que hace frio.";
		break;
		case "Marzo" :
		case "Abril" :
		case "Mayo" :
		case "Junio" :
		mensaje = "Falta para el invierno.";
		break;
		default :
		mensaje = "Ya pasamos el frio, ahora calor!!!"
	}
	//tomo el mes
	alert(mensaje)



}//FIN DE LA FUNCIÓN