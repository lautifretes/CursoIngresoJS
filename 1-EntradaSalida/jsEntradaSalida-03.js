/*Lautaro fretes


Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
/* {
	// var nombreIngresado; var no se usa
	// nombreIngresado=txtIdNombre.value;    funciona solo en google
	
	let nombreIngresado;
	let mensaje;
	nombreIngresado = document.getElementById("txtIdNombre").value
	mensaje = " Su nombre es " + nombreIngresado
	
	
	
	
	alert(mensaje);

}
 */

/* Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo. */
{
	let producto;
	let precio;
	let porcentaje;
	let precioFinal;
	let mensaje;
	
	producto 	= prompt("ingrese el nombre del poducto");
	precio 		= parseInt(document.getElementById(txtIdNombre).value);
	porcentaje 	= 30;
	precioFinal = precio + precio*porcentaje/100;
	mensaje = "el precio final del producto " +producto +" es "+ precioFinal;
	alert (mensaje)
}
