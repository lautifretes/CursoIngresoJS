/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	contador = parseInt(prompt("ingrese un numero"));

	while(contador >-1 || contador < 100){
		contador = contador + 1;
		if (contador > 0){
			contador = parseInt(prompt("ingrese un numero"));
		}
			

	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN