"use strict";
let notas = [1, 2, 3, 4];
let soma = 0;
for (let nota of notas) {
    soma += nota;
}
let media = soma / notas.length;
console.log(`Média: ${media}`);
