/* 

		LAUTARO FRETES

Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/




function mostrar()
{
	let numeroIngresado;
	let numeroPares;
	
	
	numeroIngresado = parseInt(prompt("ingrese la cantidad que quiere repetir"));
	numeroPares = 0
	


	for(i = 0; i <= numeroIngresado; i ++){
		if (i % 2 == 0) {
			numeroPares = numeroPares + 1
			console.log(i)
		}
	}
	console.log("numeros pares encontrados :"+numeroPares)

}//FIN DE LA FUNCIÓN


/* function mostrar(){
	let numeroIngresado;
	let numeroPares;

	numeroIngresado = parseInt(prompt("ingrese la cantidad que quiere repetir"));
	numeroPares = 0

	for(i = 2; i <= numeroIngresado; i = i + 2 ){
		numeroPares = numeroPares + 1
		console.log(i)
	}
	console.log("numeros pares encontrados :"+numeroPares)

} */