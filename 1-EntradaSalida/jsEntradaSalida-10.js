/* Lautaro Fretes

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
/* {
	let importe;
	let descuento;
	let resultado;
	let porcentaje;

	importe    = parseInt(document.getElementById("txtIdImporte").value);
	porcentaje = 0.25
	descuento  = importe * porcentaje;
	resultado  = importe - descuento
	document.getElementById("txtIdResultado").value = resultado;

} */

{
/* 	Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO" */

let importe;
let descuento;
let porcentaje;
let calculo;

importe     = parseInt(document.getElementById("txtIdImporte").value);
descuento   = parseInt(prompt("ingrese el descuento deseado"));
porcentaje  = importe * descuento/100;
calculo 	= importe - porcentaje;

document.getElementById("txtIdResultado").value = "importe final con descuento del "+descuento+ "% es " + calculo;

}