/*

		LAUTARO FRETES



Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas. */

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
	let contadorMasculinos;
	let contadorTerceraEdad;
	let terceraEdad;
	let promedio;
	let nacionalidad;
	let nacionalidadMayorTemperatura;
	let contadorMayorEdadSolteros;
	let contadorMujeresSolteras;
	let contadorMujeresViudas;
	let contadorMujeresCasadas;
	let acumuladorMujeresCasadas;
	
	contadorMujeresCasadas = 0;
	acumuladorMujeresCasadas = 0;
	contadorMujeresViudas = 0;
	contadorMujeresSolteras = 0;
	contadorMayorEdadSolteros = 0;
	flagMayorTemperatura = true;
	contadorTerceraEdad = 0;
	contadorMasculinos = 0;
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
		nacionalidad = prompt("ingrese su nacionalidad");
		while(! isNaN(nacionalidad)){
			nacionalidad = prompt("ingrese su nacionalidad");
		}
		// 	A)
		if(flagMayorTemperatura == true || mayorTemperatura < temperaturaCorporal){
			mayorTemperatura = temperaturaCorporal;
			nacionalidadMayorTemperatura  = nacionalidad;
			flagMayorTemperatura = false;
		}
		switch(estadoCivil){
			case "viudo":
				switch(sexo){
					case "f":
						contadorMujeresViudas = contadorMujeresViudas + 1;
						break;
				}
				break;
			case "soltero":
				if(edad > 17){
					contadorMayorEdadSolteros = contadorMayorEdadSolteros + 1;
				}
				switch(sexo){
					case "f":
						contadorMujeresSolteras = contadorMujeresSolteras + 1;
						break;
				}
				break;
			case "casado":
				if(sexo == "f"){
					acumuladorMujeresCasadas = acumuladorMujeresCasadas + edad;
					contadorMujeresCasadas = contadorMujeresCasadas + 1;
					promedio = acumuladorMujeresCasadas / contadorMujeresCasadas;
				}
				break;
		}
		if(edad > 60 && temperaturaCorporal > 38){
			contadorTerceraEdad = contadorTerceraEdad + 1;
		}
		respuesta = prompt("¿Quiere seguir ingresando tripulantes? 'si' / 'no'");
	}
	document.write("nombre con mas temperatura es: "+nacionalidad + "<br>");
	document.write("mayores de edad solteros: "+ contadorMayorEdadSolteros + "<br>");
	document.write("cantidad de mujeres solteras: "+contadorMujeresSolteras + "<br>");
	document.write("cantidad de mujeres viudas: "+contadorMujeresViudas + "<br>");
	document.write("promedio de edad de mujeres casadas "+promedio + "<br>");
}