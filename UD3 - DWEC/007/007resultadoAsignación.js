/* 007resultadoAsignación.js/.html ¿Cuáles son los valores de ‘a’ y ‘x’ después del código 
a continuación?
let a = 2;
let x = 1 + (a *= 2); */
"use strict";
let a = 2;
let x = 1 + (a *= 2);

alert(a); //Este da 4 ya que en (a *= 2) se transforma en 4
alert(x); //5
