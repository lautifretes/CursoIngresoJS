
/*          LAUTARO FRETES

Enunciado:
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". */



//function mostrar()
//{


	/* let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value); 
	//tomo la edad
	mensaje = "niña bonita"  
	if(edad == 15){
		alert(mensaje)

	}
	 */

//}FIN DE LA FUNCIÓN







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


	/* Ejercicio 1bis:   LAUTARO FRETES
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
		
	}else if (velocidad > 100){
		mensaje = velocidad + "km/h ahi de la ley";

	}else if (velocidad  > 80 ) {
		mensaje = velocidad + "km/h buen ritmo";
			 
	
	}else if (velocidad > 60){
		mensaje = velocidad + "km/h lento";
			 
	}else{
		mensaje = velocidad + "km/h muy lento";
			 
	}
	alert(mensaje);
}






/* Ejercicio 1 bis bis:           LAUTARO FRETES
con if
ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo peso <18.5
Peso normal 18,5-24.9
Preobesidad 25-26.9
Obesidad I 27-29.9
Obesidad II 30-34.9
Obesidad III >40 */

// formula para IMC = PESO dividido (altura*altura) 
/* function mostrar()
{
	let nombre;
	let altura;
	let peso;
	let imc;
	let imcResutado;
	let mensaje;

	nombre   	= prompt("ingrese su nombre");
	altura  	= parseFloat(prompt("ingrese su altura"));
	peso    	= parseFloat(prompt("ingrese su peso"));
	imc	   	    = peso / (altura * altura);
	imcResutado	= imc.toFixed(2)

	if(imcResutado < 18.5) {
		mensaje = " Sr/Sra " + nombre + ", su imc es " + imcResutado +", bajo peso";
		
	}else if(imcResutado <= 24.9) {
		mensaje = " Sr/Sra " + nombre + ", su imc es " + imcResutado +", Peso normal";
			
	
	}else if(imcResutado < 26.9){
		mensaje = " Sr/Sra " + nombre + ", su imc es " + imcResutado +", tiene preobesidad";
		
			
	}else if(imcResutado < 29.9){
		mensaje = " Sr/Sra " + nombre + ", su imc es " + imcResutado +", tiene obesidad 1";
		
			
	}else if(imcResutado < 34.9){
		mensaje = " Sr/Sra " + nombre + ", usted tiene Obesidad 2.";
		
	}else{
		mensaje = " Sr/Sra " + nombre + ", su imc es " +imcResutado + ", tiene Obesidad 3.";
		

	}		
	alert(mensaje)
}

 */