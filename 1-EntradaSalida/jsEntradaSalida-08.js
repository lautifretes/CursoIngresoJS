/*Lautaro Fretes

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
		
	let dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	let divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	/*cuando se unsa % , * , / no hace falta parentesis 
	 ej: let resto = parseInt(dividendo % divisor); */
	 let resto = dividendo % divisor
	alert("el resto es " +resto);
}
