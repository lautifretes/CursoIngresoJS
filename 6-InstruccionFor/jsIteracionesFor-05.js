/* 

		LAUTARO FRETES

Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.

*/

function mostrar()
{
	let repeticiones;

	for(i = 0; i < 100 ; i ++){
		repeticiones = prompt("Para cortar ingrese 9");
		repeticiones = parseInt(repeticiones);
		if(repeticiones == 9){
			break;
		}
	}

}//FIN DE LA FUNCIÓN