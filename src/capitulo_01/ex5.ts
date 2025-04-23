let notas = [1,2,3,4]
let soma:number = 0 
for (let nota of notas) {
    soma += nota 
}

let media:number = soma/notas.length
console.log(`Média: ${media}`)