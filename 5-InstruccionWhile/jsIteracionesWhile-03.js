/*
		LAUTARO FRETES


al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let mensaje;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750"){
		mensaje = "clave incorrecta"
		alert(mensaje)
		claveIngresada = prompt("ayuda: es utn750")
	}
	
}//FIN DE LA FUNCIÓN
