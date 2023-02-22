/* 

		LAUTARO FRETES

Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.

*/

/* function mostrar()
{
	let repeticiones;

	for(i = 0; i < 100 ; i ++){
		repeticiones = prompt("Para cortar ingrese 9");
		repeticiones = parseInt(repeticiones);
		if(repeticiones == 9){
			break;
		}
	}

}//FIN DE LA FUNCIÓN */


/* 
 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4) */


function mostrar(){
	let notas;
	let sexo;
	let alumnos;
	let promedio;
	let acumuladorDeNotas;
	let flagNotaMasBaja;
	let notaMasBaja;
	let sexoNotaMasBaja;
	let acumuladorVarones;
	let alumnosDesaprobados;
	
	
	alumnosDesaprobados = 0;
	acumuladorVarones = 0;
	flagNotaMasBaja = true;
	acumuladorDeNotas = 0;
	alumnos = 7;
	
	for(let i = 0; i < alumnos; i ++){
		notas = parseInt(prompt("ingresar nota entre 0 y 10"));
		while(isNaN(notas) || notas < 0 || notas >10){
			notas = parseInt(prompt("Error, ingrese una nota entre 0 y 10"));
		}
		sexo = prompt("ingrese sexo del alumno : 'f', 'm', 'b'");
		while(sexo != "f" && sexo != "m" && sexo != "b"){
			sexo = prompt("ingrese sexo del alumno : 'f', 'm', 'b'");
		}
	//	B)
		if (flagNotaMasBaja == true || notaMasBaja > notas){
			notaMasBaja = notas;
			sexoNotaMasBaja = sexo;
			flagNotaMasBaja = false;
		}
	//	C)
		switch (sexo) {
			case "m":
				if(notas > 5){
					acumuladorVarones = acumuladorVarones + 1;
				}
				break;
	//	D)
			default:
				if(notas < 4){
					alumnosDesaprobados = alumnosDesaprobados + 1;
				}
		}
		
	}
	
	// 	A)
	acumuladorDeNotas = acumuladorDeNotas + notas ;
	promedio = acumuladorDeNotas / alumnos;
	
	// 	A)
	console.log("total de notas "+ acumuladorDeNotas);
	console.log("promedio es "+ promedio);
	//	B)
	console.log("la nota mas baja "+ notaMasBaja+" el sexo es "+sexoNotaMasBaja);
	// 	C)
	console.log(acumuladorVarones +" 'm' con nota mayor o igual a 6");
	// 	D)
	console.log("cantidad de alumnos desaprobados " + alumnosDesaprobados);

}




