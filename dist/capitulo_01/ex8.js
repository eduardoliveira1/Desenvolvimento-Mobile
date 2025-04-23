"use strict";
function mostrar_informacoes(aluno) {
    return console.log(`Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}, Ativo? ${aluno.ativo}`);
}
const aluno = { nome: `Eduardo`, matricula: 202410, ativo: true };
mostrar_informacoes(aluno);
