/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    let precio;
    let cantidad;
    let descuento;
    let total;
    let precioTotal;
    let marca;
     // let precioBruto;
    let precioFinal;

    
    marca       = document.getElementById("Marca").value
    precio      = 35
    cantidad    = parseInt(document.getElementById("txtIdCantidad").value);
    
    descuento   = 0.50
    total       = precio * cantidad   
    precioTotal = total * descuento
    
                // EJERCICIO A.

    if (cantidad > 5) {
        precioTotal = total * descuento
        document.getElementById("txtIdprecioDescuento").value = "el precio con descuento es " + precioTotal
        
    }else {
        total = precio * cantidad
        document.getElementById("txtIdprecioDescuento").value = "el precio es " + total
    }
                //  EJERCICIO B.

    if (cantidad == 5 && marca == "ArgentinaLuz") {
        precioTotal = total - total * 0.40
        document.getElementById("txtIdprecioDescuento").value = "el precio con descuento es " + precioTotal
    
    }else if (cantidad == 5 && marca != "ArgentinaLuz") {
        precioTotal = total - total * 0.30
        document.getElementById("txtIdprecioDescuento").value = "el precio con descuento es " + precioTotal
    }
                //  EJERCICIO C.

     if (cantidad == 4 && marca == ("ArgentinaLuz" && "FelipeLamparas")){
        precioTotal = total - total * 0.25
        document.getElementById("txtIdprecioDescuento").value = "el precio con descuento es " + precioTotal
        
    }else{
        cantidad == 4 || marca != ("ArgentinaLuz" && "FelipeLamparas")
        precioTotal = total - total * 0.20
        document.getElementById("txtIdprecioDescuento").value = "el precio con descuento es " + precioTotal
    }
                //  EJERCICIO  D.

    /*    if (cantidad == 3 && marca == "ArgentinaLuz") {
        precioTotal = total - total * 0.15
        document.getElementById("txtIdprecioDescuento").value = "el precio con descuento es " + precioTotal

    } else if (cantidad == 3 && marca == "FelipeLamparas") {
        precioTotal = total - total * 0.10
        document.getElementById("txtIdprecioDescuento").value = "el precio con descuento es " + precioTotal

    }else{
        marca != "ArgentinaLuz" + "FelipeLamparas"
        precioTotal = total - total *0.05
        document.getElementById("txtIdprecioDescuento").value = "el precio con descuento es " + precioTotal

    } */
                // EJERCICIO  E.

  /*   if (precioTotal > 120) {
        precioBruto = 
        precioFinal = precioTotal + precioTotal * 
        document.getElementById("txtIdprecioDescuento").value = " IIBB Usted pago " + precioFinal + " siendo " + el impuesto que se pagó. " + precioTotal

    } */

}
