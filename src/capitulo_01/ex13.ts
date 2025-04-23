type Produto = {
    nome:string,
    emEstoque:boolean
};

function filtrarProdutosDisponiveis (produtos:Array<Produto>) {

    for (const produto of produtos) {
        if (produto.emEstoque == true) {
            return produto.nome
        }
    }
}


const p1:Produto = {nome:`Celular`, emEstoque:true}
const p2:Produto = {nome:`Notebook`, emEstoque:false}

const produtos = [p1, p2] 

console.log(`Produtos em estoque:`)
console.log(filtrarProdutosDisponiveis(produtos))