const prompt = require('prompt-sync')()

// função sem parametro e sem retorno
function cadastroProduto(){
    const nome = prompt('Digite o produto: ')
}
// função com parametros e com retorno
function valorFinal(preco, desconto) {
    let valorDesconto = preco - desconto
    return valorDesconto
}
// arrow function
const valorCredito = (preco) => {
    return preco * (1.15)
}

cadastroProduto()
console.log(`O valor, à vista, com o desconto de 10% é R$ ${valorFinal(100, 10)}`)
console.log(`O valor com o acréscimo de 15% para pagamento no cartão é R$ ${valorCredito(100)}`)

