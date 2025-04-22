"use strict";
function identificar_tipo(variavel) {
    let tipo = typeof (variavel);
    return `Tipo da variável: ${tipo}`;
}
let vari = "19";
console.log(identificar_tipo(vari));
