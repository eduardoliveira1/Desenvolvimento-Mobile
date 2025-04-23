let idade_pessoa:number = 18

if (idade_pessoa < 16) {
    console.log(`Não vota`)
} else if (idade_pessoa == 16 || idade_pessoa == 17 || idade_pessoa > 70) {
    console.log(`Voto facultativo`)
} else {
    console.log(`Voto obrigatório!`)
}