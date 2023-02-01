/* Lautaro Fretes 

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numUno;
	let numDos;
	let resultado;
	let mensaje;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numUno + numDos;
	mensaje = "La suma es " +resultado; 
	



	alert(mensaje);	
}

function restar()
{
	let numUno;
	let numDos;
	let resultado;
	let mensaje;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numUno - numDos;
	mensaje = "La resta es " +resultado; 
	
	alert(mensaje);	
}

function multiplicar()
{ 
	let numUno;
	let numDos;
	let resultado;
	let mensaje;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numUno * numDos;
	mensaje = "La multiplicacion es " +resultado; 
	
	alert(mensaje);	
	
}

function dividir()
{
	let numUno;
	let numDos;
	let resultado;
	let mensaje;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numUno / numDos;
	mensaje = "El resultado es " +resultado; 
	
	alert(mensaje);	
	
}

