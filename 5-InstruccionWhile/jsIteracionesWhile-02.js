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

function mostrar(){
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
