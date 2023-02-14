/*
			LAUTARO FRETES


al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	parseInt(numeroIngresado);
	let mensaje;
	
	while(isNaN(numeroIngresado) || numeroIngresado == -1 || numeroIngresado > 10){
		mensaje = "el n "+ numeroIngresado+ " no es valido";
		alert(mensaje);
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
		parseInt(numeroIngresado);
		
	}
	
}//FIN DE LA FUNCIÓN