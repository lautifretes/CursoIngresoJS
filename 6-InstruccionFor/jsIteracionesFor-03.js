/* 

		LAUTARO FRETES


Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

*/






function mostrar()
{
let mensaje;

mensaje = "Hola UTN FRA"
	
	
	repeticiones= prompt("ingrese cantidad de repeticiones")
	repeticiones = parseInt(repeticiones)

	for(let i = 0; i < repeticiones; i ++){

		console.log(mensaje)
	}
}


//FIN DE LA FUNCIÓN