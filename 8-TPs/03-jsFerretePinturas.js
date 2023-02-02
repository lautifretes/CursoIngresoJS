/* Lautaro Fretes


3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
//  formula para pasar de faren a celcius  =   (32 °F − 32) × 5/9 = 0 °C

    let gradosFah;
    let formula;
    let conversion;
    let mensaje;

    gradosFah  = parseFloat(document.getElementById("txtIdTemperatura").value);
    formula    = (gradosFah - 32)* 5/9;
    conversion = formula;
    mensaje    = gradosFah + " Fahrenheit son "+ conversion + " centigrados";
    
    alert(mensaje)

	
}

function CentigradosFahrenheit () 
{
//  formula para pasar de centigrados a fahrenheit =  (0 °C × 9/5) + 32 = 32 °F

    let centigrados;
    let formula;
    let conversion;
    let mensaje;

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);
    formula     = (centigrados*9/5) + 32;
    conversion  = formula;
    mensaje     = centigrados +" centigrados son "+ conversion+ " Fhrenheit";
    
    alert(mensaje)

}
