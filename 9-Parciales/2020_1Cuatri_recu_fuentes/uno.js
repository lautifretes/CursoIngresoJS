/* 

		LAUTARO FRETES


Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/



function mostrar()
{
	
	let productos;
	let tipoDeProducto;
	let precio;
	let cantidad;
	let marca;
	let fabricante;


	productos = 5
	for(let i = 0; i < productos; i++){
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
		marca = prompt("ingrese la marca: 'pepe'- 'pipo' - 'lalala'");
		while(marca != 'pepe' && marca != 'pipo' && marca != 'lalala'){
			marca = prompt("ingrese la marca: 'pepe'- 'pipo' - 'lalala'");
		}
		fabricante = prompt("ingrese el fabricante: 'rulo' - 'tito' - 'rolo'");
		while(fabricante != 'rulo' && fabricante != 'tito' && fabricante != 'rolo') 
		fabricante = prompt("ingrese el fabricante: 'rulo' - 'tito' - 'rolo'");
	}
}
