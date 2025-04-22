"use strict";
function mostrar_info(livro) {
    return console.log(`Livro: ${livro.titulo}, autor: ${livro.autor}, ${livro.paginas} páginas`);
}
const livro = { titulo: `Aprendendo TypeScript com Vitor`, autor: `Vitor Junior`, paginas: 1238 };
mostrar_info(livro);
