/* 004compruebaComillas.js/.html: ¿Cuál es la salida del script? Piénsalo y combruébalo.
let name = "Peter Parker";
*/
"use strict";
let name = "Peter Parker";

/* Para que funcione el ${} primeramente tiene que estar entre comillas
 simples ya que sino lo pilla como un texto todo y lo muestra tal cual
 */

//Esto muestra Hola 1                    Lo trata como un entero
alert( `Hola ${1}` ); // ?

//Esto muestra Hola name                 Lo trata como un tipo texto
alert( `Hola ${"name"}` ); // ?

//Esto muestra Hola Peter Parker         Lo trata como una variable
alert( `Hola ${name}` ); // ?