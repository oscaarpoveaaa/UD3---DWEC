/* Cuál será el resultado de las siguientes operaciones? */
"use strict";

alert("Prueba 1");
alert( null || 2 || undefined ); //Da 2 ya es el primer valor verdadero.
alert("Prueba 2");
alert( alert(1) || 2 || alert(3) ); //1 y 2 ya ya que muestra la primera expresión aunque de falso y se queda con el 2
alert("Prueba 3");
alert( 1 && null && 2 ); //Devuelve null ya que coge la 2 expresion al ser true la primera
alert("Prueba 4");
alert( alert(1) && alert(2) );  /* Devuelve 1 y undefines ya que la llamada a la alerta devuelve undefined (solo muestra un mensaje, por lo que no hay
                                un retorno significativo).Por eso, && evalúa el operando izquierdo (salida 1) e inmediatamente se detiene, porque 
                                indefinido es un valor falso. Y &&busca un valor falso y lo devuelve, así que está hecho. */
    
alert("Prueba 5");
alert( null || 2 && 3 || 4 ); //Devuelve 3 por que analiza el primero que es nulo pasa al siguiente y como esta el && lee el 2 el muestra el siguiente