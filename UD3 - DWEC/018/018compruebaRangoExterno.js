/* 018compruebaRangoExterno.js/.html: Escribe una condición if para comprobar que 
age NO está entre 18 y 99 inclusive. Crea dos variantes: la primera usando NOT, y la 
segunda sin usarlo. */

"use strict"

let edad = 16;

if(edad < 18 || edad > 99){
    alert("La edad no esta en rango")
}else{
    alert("La edad esta en rango")   
}

if(!(edad >= 18) || !(edad <= 99)){
    alert("La edad no esta en rango usando exclamacion")
}else{
    alert("La edad esta en rango usando exclamacion")
}