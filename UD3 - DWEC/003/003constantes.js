/* 003constantes.js/.html: Examina el siguiente código:
const cumple = '18.04.1982';
const age = someCode(cumple);
Aquí tenemos una constante cumple para la fecha de cumpleaños, y la edad age, que 
también es constante.
age es calculada desde cumple con la ayuda de “cierto código” someCode(), que es una 
llamada a función que no hemos explicado aún (¡lo haremos pronto!); los detalles no 
importan aquí, el punto es que age se calcula de alguna forma basándose en cumple. 
¿Sería correcto usar mayúsculas en cumple? ¿Y en age? ¿O en ambos?
const CUMPLE = '18.04.1982'; // ¿cumple en mayúsculas?
const AGE = someCode(CUMPLE); // ¿age en mayúsculas? */
"use strict";
/* 
La constante cumple pienso que deberia ir en mayúscula ya que el cumpleaños si lo conocemos de antemano
*/

/*
La constante age pienso que deberia ir en minúsculas ya que o se conoce antes de cargar la página, así que la nombramos 
normalmente. No obstante, es una constante porque no cambia después de su asignación 
inicial. 
*/