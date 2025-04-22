function mostrar_info(livro:Livro) :void{
    return console.log(`Livro: ${livro.titulo}, autor: ${livro.autor}, ${livro.paginas} páginas`)
}

type Livro = {
    titulo:string,
    autor:string,
    paginas:number
};

const livro:Livro = {titulo:`Aprendendo TypeScript com Vitor`,autor:`Vitor Junior`,paginas:1238}
mostrar_info(livro)