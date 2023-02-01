/*Lautaro Fretes

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe = parseInt(document.getElementById("txtIdImporte").value);
	let descuento = importe * 0.25;
	let resultado = descuento;
	document.getElementById("txtIdResultado").value = resultado



	
}
