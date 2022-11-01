/* 012nombreJS.js/.html: Usando el constructor if..else, escribe el código que pregunta: 
‘¿Cuál es el nombre “oficial” de JavaScript?’ Si el visitante escribe “ECMAScript”, 
entonces muestra: “¡Correcto!”, de lo contrario muestra: “¿No lo sabes? 
¡ECMAScript!” */
"use strict";
//Creo esta variable que es para guardar el nombre que el usuario introduce
let nombre_java;

//Se lo pido al usuario
nombre_java = prompt('¿Cuál es el nombre "oficial" de JavaScript?');

//Comparo si el nombre del usuario es identico al nombre de java, si lo ses muestra correcto si no lo otro
if (nombre_java === "ECMAScript"){
    alert("¡Correcto!");
}else{
    alert("¿No lo sabes? ¡ECMAScript!");
}