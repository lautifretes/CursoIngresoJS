/*

	LAUTARO FRETES


Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta="si";
	
	while(respuesta == "si"){
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		
		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error "+numeroIngresado+" no es un numero"));
			
		}
		contador = contador + 1
		acumulador = acumulador + numeroIngresado
		promedio = acumulador / contador
		respuesta = prompt("Quiere seguir sumando? si/no")
		
	}



	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	

}//FIN DE LA FUNCIÓN


