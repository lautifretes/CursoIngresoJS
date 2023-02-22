/*
			LAUTARO FRETES

al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
/* function mostrar()
{
	let contador;
	contador = 11; 

	while(contador > 1 && contador < 12){
		contador = contador - 1
		alert(contador);
	}

} *///FIN DE LA FUNCIÓN

// 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos)

/* function mostrar(){
	let numeroIngresado;
	let contador;
	let mayorQueDiez;
	
	mayorQueDiez = 0
	contador = 0

	while(contador < 5){
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		while(isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 1000 ){
			numeroIngresado = parseInt(prompt(numeroIngresado+"no es valido"))
		}
		if(numeroIngresado > 10 || numeroIngresado < 20){
			mayorQueDiez = mayorQueDiez + 1;
		}
		contador = contador + 1
	}
	console.log("hay "+mayorQueDiez+" numeros mayores que 10 y menores que 20");

}
 */


// 2 bis bis: Ingresar numeros hasta que el usuario quiera. Determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos). También el promedio de los números que cumplen la condición anterior.

function mostrar(){
	let numeroIngresado;
	let mayorQueDiez;
	let menorQueVeinte;
	let respuesta;
	let acumulador;
	let contador;
	let promedio;

	promedio = 0;
	contador = 0;
	acumulador = 0;
	menorQueVeinte = 0;
	mayorQueDiez = 0;
	respuesta = "si";

	while(respuesta == "si" || respuesta == "s"){
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		while(isNaN(numeroIngresado) || numeroIngresado > 1000 ){
			numeroIngresado = parseInt(prompt(numeroIngresado+"no es valido"))
		}
		if(numeroIngresado > 9){
			mayorQueDiez = mayorQueDiez + 1;
			}
		if(numeroIngresado < 20 ){
				menorQueVeinte = menorQueVeinte + 1
			}
			contador = contador + 1;
			acumulador = acumulador + numeroIngresado;
		respuesta = prompt("desea ingresar mas numeros? si/no")
	}
	promedio = acumulador / contador;

	
	console.log("hay "+ mayorQueDiez +" numeros mayor o iguales que 10 y menores que 20");
	console.log("hay "+ menorQueVeinte+" numeros menores o iguales que 20");
	console.log("el promedio es "+promedio);
}

