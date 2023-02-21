/*
		LAUTARO FRETES


Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos; 
	let sumaPositivos;
	let contadorPositivo;
	let contadorNgativo;
	let contadorCeros;
	let numerosPares;
	let promedioPositivo;
	let promedioNegativo;
	let diferencia; 

	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivo = 0;
	contadorNgativo = 0;
	contadorCeros = 0;
	numerosPares = 0;


	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		while(isNaN(numeroIngresado)){
			numeroIngresado = prompt(numeroIngresado+" no es un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(numeroIngresado > -1){
			// 2
			sumaPositivos = numeroIngresado + sumaPositivos;
			// 3
			contadorPositivo = contadorPositivo + 1;
		}
		else{
			// 1
			sumaNegativos = numeroIngresado + sumaNegativos;
			// 4
			contadorNgativo = contadorNgativo + 1;
		}
		if (numeroIngresado == 0){
			contadorCeros = contadorCeros + 1
		}else{
			if(numeroIngresado % 2 == 0){
				numerosPares = numerosPares + 1;

			}
		}
		
		respuesta=prompt("desea continuar? si/no");
	}//fin del while
	promedioPositivo = sumaPositivos / contadorPositivo;
	promedioNegativo = sumaNegativos / contadorNgativo;
	diferencia = sumaPositivos - sumaNegativos;


	document.write("la suma de negativos es :"+sumaNegativos,"<br>");
	document.write("la suma de positivos es :"+sumaPositivos, "<br>");
	document.write("se ingresaron :"+contadorPositivo+" numeros positivos <br>");
	document.write("se ingresaron :"+contadorNgativo+" numeros negativos <br>");
	document.write("se ingresaron :"+contadorCeros+" numeros 0 <br>");
	document.write("se ingresaron :"+numerosPares+" numeros pares <br>");
	document.write("el promedio de positivos es :"+promedioPositivo+ "<br>");
	document.write("el promedio de negativos es :"+promedioNegativo+ "<br>");
	document.write("la diferencia entre positivos y negativos es :"+diferencia+ "<br>");
}//FIN DE LA FUNCIÓN