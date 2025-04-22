type Pessoa = {
    nome:string,
    idade:number,
    profissao:string 
};

function descreverPessoa(pessoa:Pessoa) {
    return console.log(`${pessoa.nome} tem ${pessoa.idade} e é um ${pessoa.profissao}`)
}

let p:Pessoa = {nome:"Eduardo", idade:19, profissao:"Estudante"}
descreverPessoa(p)