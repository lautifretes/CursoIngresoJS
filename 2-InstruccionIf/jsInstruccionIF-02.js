/* Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad */




function mostrar()
{

	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	mensaje = "Sos mayor de edad" 
	
	if(edad >= 18){
		alert(mensaje);
	}
	
	

}//FIN DE LA FUNCIÓN