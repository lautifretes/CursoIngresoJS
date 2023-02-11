
/*          LAUTARO FRETES

Enunciado:
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". */



//function mostrar()
{


	/* let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value); 
	//tomo la edad
	mensaje = "niña bonita"  
	if(edad == 15){
		alert(mensaje)

	}
	 */

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


	/* Ejercicio 1bis: 
/con if
pedir a una persona que fue de vaciones , 
la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento 
hata 80km/h= lento 
hasta 100= buen ritmo
hasta 120= ahi de la ley 
mas = eso no se hace/ */

function mostrar()
{
	let distancia;
	let tiempo;
	let velocidad;

	distancia = parseInt(prompt("ingresar los kilometros recorridos")); 
	tiempo = parseInt(prompt("ingrese el tiempo de viaje")); 
	velocidad = Math.floor(distancia / tiempo);
	 
	
	if (velocidad > 120) {
		mensaje = velocidad + "km/h eso no se hace";
		 alert(mensaje);
		
	}else if (velocidad > 100){
		mensaje = velocidad + "km/h ahi de la ley";
		 alert(mensaje);

	}else if (velocidad  > 80 ) {
		mensaje = velocidad + "km/h buen ritmo";
		 alert(mensaje);
			 
	
	}else if (velocidad > 60){
		mensaje = velocidad + "km/h lento";
		 alert(mensaje);
			 
	}else{
		mensaje = velocidad + "km/h muy lento";
		 alert(mensaje);
			 
	}
	
}
