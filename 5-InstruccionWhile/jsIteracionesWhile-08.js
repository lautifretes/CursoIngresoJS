/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let  contador;
	let  respuesta;
	let  sumaPositivos;
	let  multiplicacionNegativos;
	let  acumulador;
	let  numeroIngresado;
	let acumuladorNegativo;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 0;
	acumulador = 0;
	acumuladorNegativo = 0;
	respuesta = 'si';

	while(respuesta == "si"){
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		
		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error "+numeroIngresado+" no es un numero"));
			
		}
		if(numeroIngresado >-1){
			numeroIngresado = acumulador
		}else{
			numeroIngresado = acumuladorNegativo
		}

		contador = contador + 1
		acumulador = acumulador + numeroIngresado
		multiplicacionNegativos = acumuladorNegativo * numeroIngresado
		respuesta = prompt("Quiere seguir sumando? si/no")
		
	}


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN