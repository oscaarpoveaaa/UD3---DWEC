/* 022numPrimos.js/.html: Un número entero mayor que 1 es llamado primo si no puede 
ser dividido sin un resto por ningún número excepto 1 y él mismo. En otras palabras, n 
> 1 es un primo si no puede ser divido exactamente por ningún número excepto 1 y n.
Por ejemplo, 5 es un primo, porque no puede ser divido exactamente por 2, 3 y 4.
Escribe el código que muestre números primos en el intervalo de 2 a n.
Para n = 10 el resultado será 2, 3, 5, 7.
PD. El código debería funcionar para cualquier n, no debe estar programado para 
valores fijos.
¿Puedes hacerlo con los 3 tipos de bucle? Demuéstralo. */
"use strict"
let numero = parseInt(prompt("Introduce el numero"));
let primo = true;

for(let n1 = 2; n1 <= numero; n1++){

for (let i = 2; i < numero; i++) {
    if(n1 % i == 0){

        primo = false;
    }
    
}
if(primo == true){
    document.write ("El numero " + n1 + " es primo <br>")
}else{
    document.write ("El numero " + n1 + " no es primo <br>")
}

}

