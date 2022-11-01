/* Cuáles de estos alerts va a ejecutarse? ¿Cuáles serán los resultados de 
las expresiones dentro de if(...)?
if (-1 || 0) alert( "primero" );
if (-1 && 0) alert( "segundo" );
if (null || -1 && 1) alert( "tercero" ); */

"use strict"

if (-1 || 0) alert( "primero" );
if (-1 && 0) alert( "segundo" );
if (null || -1 && 1) alert( "tercero" );

//Saldria el 1º if y el 3º if ya que el el unico que devuelve un valor falso es el 2º