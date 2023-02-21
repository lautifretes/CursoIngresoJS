/* 

		LAUTARO FRETES

Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.


*/







function mostrar()
{
	let numeroIngresado;
	let numeroPrimo;

	numeroIngresado = parseInt(prompt("ingresar un numero"));
	numeroPrimo = 0;

	for(i=2; numeroIngresado = Math.sqrt(numeroIngresado); i++){
		if(i%numeroIngresado ==0){
			console.log(i)
		}
	}


	//alert("ok");

}//FIN DE LA FUNCIÓN