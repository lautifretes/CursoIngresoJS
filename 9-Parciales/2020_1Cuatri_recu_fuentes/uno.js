/* 

		LAUTARO FRETES


Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/



function mostrar()
{
	let tipoDeProducto;
	let precio;
	let cantidad;
	// let marca;
	let fabricante;
	let flagAlcoholMasBarato;
	let alcoholMasBarato;
	let fabricanteMasBaratoDeAlcohol;
	let unidadesMasBaratasDeAlcohol;
	let contadorAlcohol;
	let contadorJabon;
	let contadorBarbijo;
	let acumuladorDeAlcohol;
	let acumuladorDeJabon;
	let acumuladorDeBarbijo;
	let mayorUnidades;
	let promedio;


	let fabricanteMasCaroJabon;
	let unidadesMasCaroJabon;
	let jabonMasCaro;
	
	fabricanteMasCaroJabon = 0;
	unidadesMasCaroJabon = 0;
	jabonMasCaro = 0;

	
	contadorJabon = 0;
	contadorBarbijo = 0;
	contadorAlcohol = 0;
	acumuladorDeJabon = 0;
	acumuladorDeBarbijo = 0;
	acumuladorDeAlcohol = 0; 
	alcoholMasBarato = 0;
	flagAlcoholMasBarato = true;

	for(let i = 0; i < 5; i++){
		tipoDeProducto = prompt("ingrese el producto: 'barbijo' - 'jabon' - 'alcohol'");
		while(tipoDeProducto != 'barbijo' && tipoDeProducto != 'jabon' && tipoDeProducto != 'alcohol'){
			tipoDeProducto = prompt("ingrese el producto: 'barbijo' - 'jabon' - 'alcohol'");
		}
		precio = parseFloat(prompt("ingrese un precio entre 100 y 300"));
		while(isNaN(precio) || precio < 100 || precio > 300){
			precio = parseFloat(prompt("ingrese un precio entre 100 y 300"));
		}
		cantidad = parseInt(prompt("ingrese la cantidad de unidades menores a 1000"));
		while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000){
			cantidad = parseInt(prompt("ingrese la cantidad de unidades menores a 1000"));
		}
		// marca = prompt("ingrese la marca: 'pepe'- 'pipo' - 'lalala'");
		fabricante = prompt("ingrese el fabricante");

		switch(tipoDeProducto){
			case "jabon":
				if(flagAlcoholMasBarato == true || precio > jabonMasCaro){
					jabonMasCaro = precio;
					fabricanteMasCaroJabon = fabricante;
					unidadesMasCaroJabon = cantidad
					flagAlcoholMasBarato = false;
					contadorJabon = contadorJabon + 1;
					acumuladorDeJabon = acumuladorDeJabon + cantidad;
				}
				break;
				case "alcohol":
					contadorAlcohol = contadorAlcohol + 1;
					acumuladorDeAlcohol = acumuladorDeAlcohol + cantidad;
				break;
			default:
				contadorBarbijo = contadorBarbijo +1;
				acumuladorDeBarbijo = acumuladorDeBarbijo + cantidad;
		}
	}// FIN DE FOR 

	if(acumuladorDeAlcohol > acumuladorDeJabon && acumuladorDeAlcohol > acumuladorDeBarbijo){
		promedio = acumuladorDeAlcohol / contadorAlcohol;
		mayorUnidades = "alcohol";
	}else{
		if(acumuladorDeJabon > acumuladorDeBarbijo){
			promedio = acumuladorDeJabon /contadorJabon;
			mayorUnidades = "jabon";
		}else{
			promedio = acumuladorDeBarbijo / contadorBarbijo;
			mayorUnidades = "barbijo";
		}
	}
	console.log("Cantidad de unidades del mas barato de jabon : " + unidadesMasCaroJabon + ". Su fabricante es: " + fabricanteMasCaroJabon);
	console.log("Unidades totales de barbijos: " + acumuladorDeBarbijo);
	console.log("El tipo con mas unidades es: " + mayorUnidades);
	console.log("El promedio de compra del tipo con mas unidades es: " + promedio);
}
