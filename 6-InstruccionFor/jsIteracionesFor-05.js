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
	let contador;
	let promedio;
	let notaBaja;
	let contadorNotas;

	contadorNotas = 0

	for(contador = 0; contador < 7 ; contador ++){
		notas = parseInt(prompt("ingresar nota"));
		sexo = prompt("ingrese sexo : 'f' , 'm' , 'b' ");
		while(isNaN(notas) || notas < 0 || notas > 10){
			notas = parseInt(prompt("error, ingrese una nota"));
		}
		while(!isNaN(sexo)&& sexo != "f" && sexo != "m" && sexo != "b"){
			sexo = prompt("error, ingrese sexo : 'f' , 'm' , 'b' ");
		}
		
		contadorNotas =  + 1

		//console.log(notas)
		//console.log(sexo)
	} 
	promedio = contadorNotas / contador
	console.log(sexo)
	console.log("notas"+notas)
	console.log("el promedio es "+promedio);
}