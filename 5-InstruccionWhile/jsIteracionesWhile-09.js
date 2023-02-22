/*			

	LAUTARO FRETES



Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/* function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables
	banderaDelPrimero = true;
	respuesta = 'si';

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		if (banderaDelPrimero == true) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}else{
			if(numeroIngresado > numeroMaximo){
				numeroMaximo = numeroIngresado
			}else{
				numeroMinimo = numeroIngresado
			}
		}
		respuesta=prompt("desea continuar? si");
	}//FIN DE WHILE

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN */


/* 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay) */

function mostrar(){
	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let menorNumeroPar;
	let flagMayorNegativo;
	let flagNumeroPar;
	let flagPriemero;
	let respuesta;
	let mayorNegativo;
	
	flagMayorNegativo = true;
	flagNumeroPar = true;
	flagPriemero = true;
	numeroMaximo = 0;
	numeroMinimo = 0;
	menorNumeroPar = 0;
	mayorNegativo = 0;
	respuesta = "si";
	

	while(respuesta == "si" || respuesta == "s"){
		numeroIngresado = parseFloat(prompt("ingrese un numero"));
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseFloat(prompt("ingrese un numero"));
		}
		if(flagPriemero == true){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			
			flagPriemero = false;
		}else{
			if(numeroMaximo < numeroIngresado){
				numeroMaximo = numeroIngresado;
			}else{
				numeroMinimo = numeroIngresado;
			}
			if (numeroMinimo % 2 == 0){
				if(flagNumeroPar == true || menorNumeroPar < numeroMinimo){
					menorNumeroPar = numeroMinimo;
					flagNumeroPar = false;
				}
			}
			if(numeroIngresado < 0){
				if(flagMayorNegativo == true || mayorNegativo < numeroIngresado){
					mayorNegativo = numeroIngresado;
					flagMayorNegativo = false;
				}
			}
			
			console.log("numero maximo es "+ numeroMaximo);
			console.log("numero minimo es "+numeroMinimo);
			console.log("el menor numero par es "+menorNumeroPar);  
			console.log("el mayor de los negativos es "+mayorNegativo);  
		}
		respuesta = prompt("quiere continuar? si/no");
	}
	console.log("numero maximo es "+ numeroMaximo);
	console.log("numero minimo es "+numeroMinimo);
	console.log("el menor numero par es "+menorNumeroPar);
	console.log("el mayor de los negativos es "+mayorNegativo);  
}