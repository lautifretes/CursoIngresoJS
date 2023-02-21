/*
			LAUTARO FRETES

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{

	let edad;
	let flagPrimero;
	let nombre;
	let mayorEdad;
	let menorEdad;
	let respuesta;


	
	nombre = prompt("ingrese su nombre")
	respuesta = "si"
	while (respuesta == "si" || respuesta == "s") {
		edad = parseInt(prompt("ingrese su edad"));
		while (isNaN(edad)){
			edad = parseInt(prompt("error, "+edad+ " no es un numero"));
		}
		if(flagPrimero == true){
			mayorEdad = edad;
			menorEdad = edad;
			flagPrimero = false;
		}else{
			if(edad > mayorEdad){
				mayorEdad = edad;
			}else{
				menorEdad = edad;
			}
		}
		respuesta = prompt("desea continuar? si/ no");
	}
	console.log("la mayor edad es "+mayorEdad);
	console.log("la menor edad es "+ menorEdad);


	/* numero = 0
	while(numero < 10){
		numero = numero +1
		alert(numero);|
	} */
}






/*
al presionar el botón "mostrar", mostrar 125 repeticiones 
con números ASCENDENTE, desde el 1 al 125. 
a) contar los numeros IMPARES 
b)contar los numeros PARES,
c)el total de la suma de los numeros impares
d)el total de la suma de los numeros pares
e)el mayor de los numeros impares; 
f)el mayor de los numeros; 
*/
/* function mostrar()
{
	//declaro la varible
	let i;
	let contadorNumeroPares; 
	let contadorNumerosImpares; 
	let acumuladorNumeroImpares;
	let acumuladorNumeroPares;
	let mayorNumeroImpar; 
	let mayorNumero; 

	//inicializar la variable
	i = 10; 
	contadorNumeroPares = 0; 
	contadorNumerosImpares = 0; 
	acumuladorNumeroImpares = 0; 
	acumuladorNumeroPares = 0; 
	mayorNumeroImpar = 1; 
	mayorNumero = 0; 


	while(i < 125)
	{
		if(i%2 != 0) // esto es un impar 
		{       
			//a) contar los numeros IMPARES                    0      
			contadorNumerosImpares = contadorNumerosImpares + 1;
			//c)el total de la suma de los numeros impares
			acumuladorNumeroImpares = acumuladorNumeroImpares + i;
			//e)el mayor de los numeros impares; 
			if(i > mayorNumeroImpar)
			{
				mayorNumeroImpar = i; 
			}
		}
		else
		{	//d)el total de la suma de los numeros pares
			contadorNumeroPares = contadorNumeroPares + 1;
			acumuladorNumeroPares = acumuladorNumeroPares + i;	
		}

		if(i > mayorNumero)
		{
			mayorNumero = i; 
		}

		//modificar la condicion de uno en uno 
		i= i + 1; 

		//moestrar el contador
		console.log(i); 
	}//fin de while



	console.log("La cantidad de numeros impares es: " + contadorNumerosImpares); 
	console.log("La cantidad de numeros pares es: " + contadorNumeroPares); 
	console.log("el total de la suma de los numeros Impares "+acumuladorNumeroImpares); 
	console.log("el total de la suma de los numeros Pares "+acumuladorNumeroPares); 
	console.log("el mayor de los numeros impares "+ mayorNumeroImpar); 
	console.log("el mayor de los numeros es: "+ mayorNumero); 
	
}
 */
