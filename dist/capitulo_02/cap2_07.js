"use strict";
const nome_aluno = "Eduardo";
let notas_aluno = [3, 6, 8];
let frequencia = 89;
let soma_notas = 0;
for (let nota of notas_aluno) {
    soma_notas += nota;
}
let media_notas = soma_notas / notas_aluno.length;
if (frequencia < 75) {
    console.log(`Reprovado por falta!`);
}
else {
    if (media_notas >= 7) {
        console.log(`Aprovado`);
    }
    else if (media_notas >= 5 && media_notas < 7) {
        console.log(`Recuperação`);
    }
    else {
        console.log(`Reprovado por nota`);
    }
}
