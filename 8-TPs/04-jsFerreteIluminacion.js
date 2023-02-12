
//              LAUTARO FRETES




/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */   
//                     TODO IF 
//function CalcularPrecio () 
/* {
    let cantidadLamparas;
    let precio;
    let porcentaje;
    let marca;
    let precioBruto;
    let iibb;
    let total;
    let mensaje; 

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    precio           = 35;
    marca            = document.getElementById("Marca").value;
    porcentaje       = 0;
    precioBruto      = cantidadLamparas * precio ;
    
    

    if(cantidadLamparas > 5){
        porcentaje = -50        
    }
    else{
        if (cantidadLamparas == 5) {
            if (marca == "ArgentinaLuz") {
                porcentaje = -40
            } else {
                porcentaje = -30
                
            }
        }else{
            if (cantidadLamparas == 4) {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                    porcentaje = -25
                }else{
                    porcentaje = -20
                }
                
            }else{
                if (cantidadLamparas == 3) {
                    if(marca ==  "ArgentinaLuz"){
                        porcentaje = -15
                    }else{
                        if(marca == "FelipeLamparas"){
                            porcentaje = -10
                        }else{
                            porcentaje = -5
                        }
                    }
                }else{
                    porcentaje = 0
                }
            }
        }
       
    }
    total = precioBruto + precioBruto * porcentaje/100;
    
    if(total > 120){
        porcentaje = 10;
    }else{
        porcentaje = 0;
    }

    iibb  = total * porcentaje /100;
    iibb  = iibb.toFixed(2); 
    total = total + total * porcentaje/100;
    mensaje = "Usted pago " + total + " de IIBB, siendo " + iibb + " el impuesto que pago" ;

    console.log(mensaje);

}   
     */




//                                   LAUTARO FRETES

//                     TODO SWITCH

/*  function CalcularPrecio () {

    let cantidadLamparas;
    let precio;
    let porcentaje;
    let marca;
    let precioBruto;
    let iibb;
    let total;
    let mensaje; 

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    precio           = 35;
    marca            = document.getElementById("Marca").value;
    porcentaje       = 0;
    precioBruto      = cantidadLamparas * precio ;
    iibb             = 10

    switch(cantidadLamparas){
        case 6:
            porcentaje = -50
            break;
        case 5:
            switch(marca){
                case "ArgentinaLuz":
                    porcentaje = -40 
                    break;
                    default:
                     porcentaje = -30
            }
            break;
        case 4:
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = -25
                    default:
                        porcentaje = -20
            }
            break;
        case 3:
            switch(marca){
                case "ArgentinaLuz":
                    porcentaje = -15
                    break;
                    case "FelipeLamparas":
                    porcentaje = -10
                    break;
                    default:
                        porcentaje = -5

            }
            break;
        case 0:
        case 1:
        case 2:
            porcentaje = 0
            break;
    }
    
    total = precioBruto + precioBruto * porcentaje/100; 

    switch(total){
        case 105:
            porcentaje = iibb
            break;
            default:
                porcentaje = 0
    }
    iibb  = total * porcentaje /100;
    iibb  = iibb.toFixed(2); 
    total = total + total * porcentaje/100;
    mensaje = "Usted pago " + total + " de IIBB, siendo " + iibb + " el impuesto que pago" ;

    console.log(mensaje);


 } */

//                     SWITCH (las marcas), IF(cantidad)
    
 /* function CalcularPrecio (){
    let cantidadLamparas;
    let precio;
    let porcentaje;
    let marca;
    let precioBruto;
    let iibb;
    let total;
    let mensaje; 

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    precio           = 35;
    marca            = document.getElementById("Marca").value;
    porcentaje       = 0;
    precioBruto      = cantidadLamparas * precio ;
     
    switch (marca) {
        case "ArgentinaLuz":
            if (cantidadLamparas > 5) {
                porcentaje = -50
            }else{
                if(cantidadLamparas == 5){
                    porcentaje = -30
                }else{
                    if(cantidadLamparas == 4){
                        porcentaje = -25
                    }else{
                        if(cantidadLamparas == 3){
                            porcentaje = -15
                        }else{
                            porcentaje = 0
                        }
                    }
                }
            }
            
        break;
            case "FelipeLamparas":
                if (cantidadLamparas > 5) {
                    porcentaje = -50
                }else{
                    if(cantidadLamparas == 5){
                        porcentaje = -40
                    }else{
                        if(cantidadLamparas == 4){
                            porcentaje = -25
                        }else{
                            if(cantidadLamparas == 3){
                                porcentaje = -10
                            }else{
                                porcentaje = 0
                            }
                        }
                    }
                }
            break;
            
            default:
                if (cantidadLamparas > 5) {
                    porcentaje = -50
                }else{
                    if(cantidadLamparas == 5){
                        porcentaje = -30
                    }else{
                        if(cantidadLamparas == 4){
                            porcentaje = -20
                        }else{
                            if(cantidadLamparas == 3){
                                porcentaje = -15
                            }else{
                                porcentaje = 0
                            }
                        }
                    }
                }
            
    }
    total = precioBruto + precioBruto * porcentaje/100; //105

    switch(total){
        case total:
            if(total > 120){
                porcentaje = 10
            }else{
                porcentaje = 0
            }
            
        }
        iibb  = total * porcentaje /100;
        iibb  = iibb.toFixed(2); 
        total = total + total * porcentaje/100;
        mensaje = "Usted pago " + total + " de IIBB, siendo " + iibb + " el impuesto que pago" ;
    
        console.log(mensaje);
    }
 */
 

//                     Con switch(cantidad) y if (marca)

    function CalcularPrecio (){

     let cantidadLamparas;
     let precio;
     let porcentaje;
     let marca;
     let precioBruto;
     let iibb;
     let total;
     let mensaje; 

     cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
     precio           = 35;
     marca            = document.getElementById("Marca").value;
     porcentaje       = 0;
     precioBruto      = cantidadLamparas * precio ;

        switch (cantidadLamparas) {
            case 6:
            porcentaje = -50
            break;

            case 5: 
            if (marca != "ArgentinaLuz") {
                porcentaje = -30
                }else{
                porcentaje = -40
            }
            break;

            case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                porcentaje = -25
                 }else{
                porcentaje = -20
            }
            break;

            case 3:
            if(marca == "ArgentinaLuz"){
                porcentaje = -15
                }else{
                    if(marca == "FelipeLamparas"){
                    porcentaje = -10
                     }else{
                    porcentaje = -5
                    }
                
            }
            break;

            case 2:
            case 1:
            case 0:
            porcentaje = 0
            break;

            default:
                porcentaje = -50
        
        }

        total = precioBruto + precioBruto * porcentaje/100; //105

        switch(marca){
            case "ArgentinaLuz":
            case "FelipeLamparas":
            case "JeLuz":
            case "HazIluminacion":
            case "Osram":
                if(total > 120){
                    porcentaje = 10
                }else{
                    porcentaje = 0
                }
                
            }
            iibb  = total * porcentaje /100;
            iibb  = iibb.toFixed(2); 
            total = total + total * porcentaje/100;
            mensaje = "Usted pago " + total + " de IIBB, siendo " + iibb + " el impuesto que pago" ;
        
            console.log(mensaje);
     

    }