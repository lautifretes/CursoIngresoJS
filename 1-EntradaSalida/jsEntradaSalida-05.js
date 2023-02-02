/*Lautaro Fretes



Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{

/* {	
	let nombre 
	let edad
	let mensaje
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	mensaje = "usted se llama " + nombre + " y tiene "+ edad; 




	alert(mensaje);
} */


/* Ejercicio 5.bis: 
 se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan */
	let apellido;
	let nombre;
	let edad ;
	let mensaje;

	apellido = prompt("ingrese su apellido")
	nombre 	 = document.getElementById("txtIdNombre").value;
	edad 	 = parseInt(document.getElementById("txtIdEdad").value);
	mensaje  = apellido + ", usted se llama " + nombre + "y tiene " + edad + " años";
	
	alert(mensaje)
}
