/*Lautaro fretes


Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// var nombreIngresado; var no se usa
	// nombreIngresado=txtIdNombre.value;    funciona solo en google
	
	let nombreIngresado;
	let mensaje;
	nombreIngresado = document.getElementById("txtIdNombre").value
	mensaje = " Su nombre es " + nombreIngresado
	
	
	
	
	alert(mensaje);




}


