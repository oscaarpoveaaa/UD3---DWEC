/* 006sufijoPrefijo.js/.html: ¿Cuáles son los valores finales de todas las variables a, b, c y 
d después del código a continuación?
*/
"use strict";
let a = 1, b = 1;
let c = ++a;
let d = b++;

alert(a);
alert(b);
alert(c);
alert(d);

//La variable a da 2 ya que al asignarlo en el c se incrementa 1
//La variable b da 2 ya que en el d se incrementa
//La variable c da 2 ya que a vale 2 en el momento de asignar la c
//La variable d da 1 ya que el b++ esta despues asi que asgina y se incrementa despues
