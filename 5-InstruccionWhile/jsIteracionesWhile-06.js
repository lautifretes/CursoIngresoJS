
//			LAUTARO FRETES


/* Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */




/* function mostrar()
{
	let numeroIngresado;
	let acumulador;
	let i;
	let contador;
	let promedio;

	
	
	
	acumulador= 0;
	contador = 0
	i = 0
	
	while(i<5){
		
		numeroIngresado = parseInt(prompt("ingrese un numero"))
		
		while(isNaN(numeroIngresado)){
			
			numeroIngresado = parseInt(prompt("ingrese un numero"))
			
		}
		i = i + 1
		contador = contador + 1
		acumulador = acumulador + numeroIngresado
	}

	promedio = acumulador / contador
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN */



function mostrar(){
	let numeroIngresado;
	let acumulador;
	let i;
	let contador;
	let promedio;

	acumulador= 0;
	contador = 0
	
	for(let i = 0; i < 5; i ++){
		numeroIngresado = parseInt(prompt("ingrese un numero"))
		
			
			while(isNaN(numeroIngresado)){
				
				numeroIngresado = parseInt(prompt("ingrese un numero"))
				
			}
			
			contador = contador + 1
			acumulador = acumulador + numeroIngresado
	}

		promedio = acumulador / contador
	
		document.getElementById("txtIdSuma").value = acumulador;
		document.getElementById("txtIdPromedio").value = promedio;
}
	

