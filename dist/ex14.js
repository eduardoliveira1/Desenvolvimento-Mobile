"use strict";
function descreverPessoa(pessoa) {
    return console.log(`${pessoa.nome} tem ${pessoa.idade} e é um ${pessoa.profissao}`);
}
let p = { nome: "Eduardo", idade: 19, profissao: "Estudante" };
descreverPessoa(p);
