//                      LAUTARO FRETES


/* Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */


function mostrar()
{
	let numero;
	let mensaje;

	//Genero el número RANDOM entre 1 y 10 
	numero = Math.ceil(Math.random()*10)



	if (numero < 4)
	{
		mensaje = numero + " Vamos la proxima se puede";
	}
	else if (numero < 9)
	{
	mensaje = numero + " APROBO";
	}
	else
	{
	mensaje = numero + " EXCELENTE";
	}
	console.log(mensaje)


	//alert(mensaje);

}//FIN DE LA FUNCIÓN