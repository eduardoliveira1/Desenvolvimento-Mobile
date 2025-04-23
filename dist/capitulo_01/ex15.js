"use strict";
const aluno1 = { nome: "Eduardo", matricula: 202410, ativo: true };
const aluno2 = { nome: "Gabriel", matricula: 202411, ativo: true };
const aluno3 = { nome: "Gean", matricula: 202412, ativo: false };
const alunos = [aluno1, aluno2, aluno3];
console.log(`Alunos ativos:`);
for (const aluno of alunos) {
    if (aluno.ativo == true) {
        console.log(aluno.nome);
    }
}
