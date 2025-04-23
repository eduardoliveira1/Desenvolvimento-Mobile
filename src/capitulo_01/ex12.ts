function identificar_tipo(variavel:string|number) {
    let tipo:string = typeof(variavel)
    
    return `Tipo da variável: ${tipo}`
}

let vari:string|number = "19"
console.log(identificar_tipo(vari))