
/*          LAUTARO FRETES

Enunciado:
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". */



function mostrar()
{


	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value); 
	//tomo la edad
	mensaje = "niña bonita"  
	if(edad == 15){
		alert(mensaje)

	}
	

}//FIN DE LA FUNCIÓN







/*
	if(condicion)//verdadero o falso (0) true -> verdadero false -> falso
	{
		codigo...;
	}else
	{
		codigo...;		
	}

	operadores aritmeticos:
	+ - * / %
	operadores relacionales o condicionales
	< > <= >= == !=
	operadores logicos
    condicionUno	&&  condicionDos            ||               !
	y logica                                o logica         negacion
	*/

