/*

			LAUTARO FRETES

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroDeLegajo;
	let nacionalidad;

	
	edadIngresada = parseInt(prompt("ingrese la edad entre 18 y 90"));
	while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada >90){
		edadIngresada = parseInt(prompt("ingrese la edad entre 18 y 90"));
	}
	document.getElementById("txtIdEdad").value = edadIngresada
	
	sexoIngresado = prompt("ingrese el sexo? 'm' para masculino 'f' para femenino");
	while(sexoIngresado != 'f' && sexoIngresado != 'm'){
		sexoIngresado = prompt("ingrese el sexo? 'm' para masculino 'f' para femenino");
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;
	
	estadoCivilIngresado = parseInt(prompt("ingrese '1'-para soltero '2'-para casado '3'-para divorciado '4'- para viudo")); 
	while(isNaN(estadoCivilIngresado) || estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4){
		estadoCivilIngresado = parseInt(prompt("ingrese '1'-para soltero '2'-para casado '3'-para divorciado '4'- para viudo")); 
	}
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	
	sueldoBruto = parseInt(prompt("ingrese sueldo no menor a 8000")); 
	while(isNaN(sueldoBruto) || sueldoBruto < 8000){
		sueldoBruto = parseInt(prompt("ingrese sueldo no menor a 8000")); 
	}
	document.getElementById("txtIdSueldo").value = sueldoBruto; 
	
	numeroDeLegajo = parseInt(prompt("ingrese su legajo"));
	while(isNaN(numeroDeLegajo) || numeroDeLegajo < 1000){
		numeroDeLegajo = parseInt(prompt("ingrese su legajo, debe ser mayor a 1000"));
	}
	document.getElementById("txtIdLegajo").value = numeroDeLegajo; 
	
	nacionalidad = prompt("ingrese su nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados")
	while(nacionalidad !="A" && nacionalidad !="E" && nacionalidad !="N"){
		nacionalidad = prompt("ingrese las letras en mayuscula 'A','E','N' ")
	}
	document.getElementById("txtIdNacionalidad").value = nacionalidad; 

}
