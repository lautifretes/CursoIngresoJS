/*

					LAUTARO FRETES

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "F" && sexoIngresado != "M"){
		sexoIngresado = prompt("ingrese f ó m .")
	}


	// txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN