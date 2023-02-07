/*Lautaro Fretes

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
/*cuando se unsa % , * , / no hace falta parentesis 
 ej: let resto = parseInt(dividendo % divisor); */
function SacarResto()
{
		
	let dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	let divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	 let resto = dividendo % divisor
	alert("el resto es " +resto);
}



/* Ejercicio 8.bis: Ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El resto de los numeros (el primero en modulo del segundo) 
 */

/* {
	let numUno;
	let numDos;
	let cantNum;
	let suma;
	let promedio;
	let resto;
	let mensaje;

	numUno 	 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numDos 	 = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	cantNum	 = 2

	suma 	 = numUno + numDos;
	promedio = suma / cantNum; 
	resto 	 = numUno % numDos;
	mensaje	 = "la suma es "+suma+" el promedio es "+promedio+" y su modulo "+ resto;

	
	
	alert(mensaje);
	



}
 */