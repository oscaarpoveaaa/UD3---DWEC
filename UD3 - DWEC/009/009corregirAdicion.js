/* 009corregirAdicion.js/.html: Aquí hay un código que le pide al usuario dos números y 
muestra su suma. Funciona incorrectamente. El resultado en el ejemplo a continuación 
es 12 (para valores de captura predeterminados). ¿Por qué? Arréglalo. El resultado 
debería ser 3.
 */
"use strict";
let a = prompt("¿Primer número?", 1);
let b = prompt("¿Segundo número?", 2);

//Hay que pasarlo a entero ya que por defecto el pront recoge un string y a la hora de mostrarlo lo muestra como tal
alert(parseInt(a) + parseInt(b)); // 12