/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let precioProductoUno;
    let precioProductoDos;
    let precioProcutoTres;
    //let mensaje

    precioProductoUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioProductoDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioProcutoTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    //  mensaje = "la suma de los productos es " + (precioProductoUno + precioProductoDos + precioProcutoTres)
    alert("la suma es " + (precioProductoUno + precioProductoDos + precioProcutoTres));



}
function Promedio() {
    
    let precioProductoUno;
    let precioProductoDos;
    let precioProcutoTres;
    let promedio; 

    precioProductoUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioProductoDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioProcutoTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    promedio = (precioProductoUno+precioProductoDos+precioProcutoTres) /3;
    alert("El promedio es " + promedio)

}
function PrecioFinal() {
    let precioProductoUno;
    let precioProductoDos;
    let precioProcutoTres;
    let precioFinal; 

    precioProductoUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioProductoDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioProcutoTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    precioFinal = (precioProductoUno + precioProductoDos + precioProcutoTres)*1.21;
    alert ("el precio final es " + precioFinal)
    

}