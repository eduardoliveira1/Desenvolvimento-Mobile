interface Aluno_ {
    nome:string,
    notas:number[]
}

function verificarAprovacao(alunos:Aluno_[]) {
    for (const aluno of alunos) {
        let media:number = 0
        for (let i = 0; i < 3; i++) {
            media += aluno.notas[i]
        }
        media /= 3
        if (media >= 7) {
            console.log(`${aluno.nome} - Média: ${media} - Situação: Aprovado`)
        }else {
            console.log(`${aluno.nome} - Média: ${media} - Situação: Reprovado`)
        }
    }
}

const alunoos = [
    {nome:"Eduardo", notas:[3,3,3]},
    {nome:"Luiz", notas:[8,6,7]},
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 5] },
    { nome: "Carlos", notas: [7, 7, 7] }
]

verificarAprovacao(alunoos)