/* /*
			LAUTARO FRETES

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

/* function mostrar(){
	numero = 0
	while(numero < 10){
		numero = numero +1
		alert(numero);
	}
}

 */


// 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven

function mostrar()
{

	let edad;
	let flagPrimero;
	let nombre;
	let mayorEdad;
	let menorEdad;
	let respuesta;
	let nombreMayor;
	let nombreMenor;
	let mensaje;
	let mensajeUno;

	flagPrimero = true;
	respuesta = "si";

	while (respuesta == "si" || respuesta == "s") {
		nombre = prompt("ingrese su nombre");
		edad = parseInt(prompt("ingrese su edad"));
		while (isNaN(edad)||edad < 0|| edad > 120){
			edad = parseInt(prompt("error, "+edad+ " no es valido"));
		}
		if(flagPrimero == true){
			mayorEdad = edad;
			menorEdad = edad;
			nombreMayor = nombre;
			nombreMenor = nombre;
			flagPrimero = false;
		}else{
			if(mayorEdad < edad){
				nombreMayor = nombre;
				mayorEdad = edad;
				}else{
					nombreMenor = nombre;
					menorEdad = edad;
				}
		}
		respuesta = prompt("desea continuar? si/ no");
	}

	mensaje = "la persona mayor es "+nombreMayor+" tiene "+ mayorEdad+" años";
	mensajeUno = "La persona menor es "+nombreMenor+" tiene "+ menorEdad+" años";
	console.log(mensaje);
	console.log(mensajeUno);
} 

