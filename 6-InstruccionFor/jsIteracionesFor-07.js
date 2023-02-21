/* 

		LAUTARO FRETES

Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.


*/

function mostrar(){
	let numeroIngresado;
	let cantidadDivisor;

	numeroIngresado = parseInt(prompt("ingrese un numero"));
	cantidadDivisor = 0;

	console.log("El numero ingresado es :"+numeroIngresado);
	for(i=1; i <= numeroIngresado; i ++){
		if(numeroIngresado % i == 0){
			console.log("divisro "+ i);
			cantidadDivisor = cantidadDivisor + 1
		}
		
	}
	
	console.log("cantidad de divisores encontrados "+ cantidadDivisor);


	//alert("ok");


}//FIN DE LA FUNCIÓN