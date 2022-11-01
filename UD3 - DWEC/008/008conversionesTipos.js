/* 008conversionesTipos.js/.html: ¿Cuáles son los resultados de estas expresiones? */
"use strict";
alert("" + 1 + 0); //Da 10 ya que al empezar por comillas entiende que todo es un texto y directamente te lo concatena
alert("" - 1 + 0); //Da -1 ya que entiende que estas intentando sumarle al -1 el 0
alert(true + false); //Da 1 ya que el valor del true es 1 y el valor del false es 0, así que te hace esa suma (1+0)
alert(6 / "3"); //Da 2 ya que aunque este entre comillas lo sigue tratando como un numero y no como un texto
alert("2" * "3"); //Da 6 ya que al ser una operación los trata como números
alert(4 + 5 + "px"); //Da 9 px ya que realiza la operacion y le añade el final el texto
alert("$" + 4 + 5); //Da $45 ya que al empezar por comillas entiende que todo es un texto y directamente te lo concatena
alert("4" - 2); //Da 2, realiza la operacion sin problemas 
alert("4px" - 2); //Da NaN ya que es imposible restarle algo a un texto
alert("  -9  " + 5); //Da -9 5 ya que al empezar como cadena y hacerle el + lo trata como igual
alert("  -9  " - 5); //Da -14 ya que el al poner el - lo trata como número y no como string
alert(null + 1); //Da 1 ya que el null tiene como por defecto el valor 0
alert(undefined + 1); //Da NaN ya es imposible sumarle 1 a algo que no esta definido 
alert(" \t \n" - 2); //Da -2 ya que no tiene valor como tal esas expresiones













