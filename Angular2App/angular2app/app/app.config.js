﻿scripts = document.getElementsByTagName("script");
// Obtencion de la url del último script cargado (éste)
src = scripts[scripts.length - 1].src;
// Eliminación del nombre del script para tener la url base
src = src.replace("/app.config.js", "");
console.log(src);
var BASE_URL = src;



// Unset de las variables usadas
delete scripts;
delete src;
