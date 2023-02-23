/* 

			LAUTARO FRETES


Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.


*/



function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let mayorTemperatura;
	let flagMayorTemperatura;
	let respuesta;
	let nombreConMasTemperatura;
	let mayorEdadViudos;
	let contadorViudos;
	let contadorSolteros;
	let contadorMasculinos;
	let contadorTerceraEdad;
	let terceraEdad;
	let promedio;
	let acumuladorDeEdad;
	

	flagMayorTemperatura = true;
	contadorTerceraEdad = 0;
	mayorEdadViudos = 0;
	acumuladorDeEdad = 0;
	contadorSolteros = 0;
	contadorMasculinos = 0;
	contadorViudos = 0;
	mayorTemperatura = 0;
	terceraEdad = 0;
	respuesta = "si"

	while(respuesta == "si" || respuesta == "s"){
		nombre = prompt("ingrese su nombre");
		while(! isNaN(nombre)){
			nombre = prompt("ingrese su nombre");
		}
		edad = parseInt(prompt("ingrese su edad"));
		while(isNaN(edad) || edad < 1 || edad > 90){
			edad = parseInt(prompt(edad + " no es una edad valida"));
		}
		sexo = prompt("ingrese el sexo: 'f'(femenino), 'm'(masculino)");
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("ingrese el sexo: 'f', 'm'");
		}
		estadoCivil = prompt("ingrese estado civil: 'soltero', 'casado', 'viudo'");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("ingrese estado civil: 'soltero', 'casado', 'viudo'");
		}
		temperaturaCorporal = parseFloat(prompt("ingrese la temperatura corporal"))
		while(isNaN(temperaturaCorporal) || temperaturaCorporal < 34 || temperaturaCorporal > 40){
			temperaturaCorporal = parseFloat(prompt(temperaturaCorporal + " no es valido. Entre '34' y '40'"));
		}
		// 	A)
		if(flagMayorTemperatura == true || mayorTemperatura < temperaturaCorporal){
			mayorTemperatura = temperaturaCorporal;
			nombreConMasTemperatura = nombre;
			flagMayorTemperatura = false;
		}
		switch(estadoCivil){
			case "viudo":
				if(sexo == "m"){
					contadorViudos = contadorViudos + 1;
				}else{
					if(edad >21){
						mayorEdadViudos = mayorEdadViudos + 1;
					}else{
						contadorViudos = contadorViudos;
					}
				}
				break;
			case "soltero":
				// 	E)
				if(sexo == "m"){
					acumuladorDeEdad = acumuladorDeEdad + edad;
					contadorSolteros = contadorSolteros + 1;
					promedio = acumuladorDeEdad / contadorSolteros;
				}
				break;
		}
		if(edad > 60 && temperaturaCorporal > 38){
			contadorTerceraEdad = contadorTerceraEdad + 1;
		}
		respuesta = prompt("¿Quiere seguir ingresando tripulantes? 'si' / 'no'");
	}
	document.write("nombre con mas temperatura es: "+nombreConMasTemperatura + "<br>");
	document.write("mayores de edad viudos son: "+ mayorEdadViudos + "<br>");
	document.write("cantidad de hombres solteros: "+contadorSolteros + "<br>");
	document.write("cantidad de hombres viudos: "+contadorViudos + "<br>");
	document.write("promedio de edad de hombres solteros "+promedio + "<br>");

	
}
