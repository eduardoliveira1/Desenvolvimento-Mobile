function mostrar_informacoes(aluno:Aluno) :void{
    return console.log(`Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}, Ativo? ${aluno.ativo}`)
}

interface Aluno {
    nome:string,
    matricula:number,
    ativo:boolean
}

const aluno:Aluno = {nome:`Eduardo`, matricula:202410, ativo:true}
mostrar_informacoes(aluno)