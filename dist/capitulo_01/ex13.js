"use strict";
function filtrarProdutosDisponiveis(produtos) {
    for (const produto of produtos) {
        if (produto.emEstoque == true) {
            return produto.nome;
        }
    }
}
const p1 = { nome: `Celular`, emEstoque: true };
const p2 = { nome: `Notebook`, emEstoque: false };
const produtos = [p1, p2];
console.log(`Produtos em estoque:`);
console.log(filtrarProdutosDisponiveis(produtos));
