// 3- Você é um colecionador de video games e resolveu ir a uma loja para comprar alguns jogos raros. Porém, você tem apenas R$2000 para gastar. Faça um programa que pergunte o nome do jogo e o valor, repetidamente. Caso o valor ultrapasse R$2000, encerrar (desconsiderando o último jogo). 
// Extra: Mostrar na tela o total gasto em reais nos jogos, a quantidade de jogos, o mais caro e o mais barato.
let resultado03 = document.getElementById("resultado03")
let orcamento = 2000
let totalGasto = 0
let quantidadeJogos = 0
let precoMenor = 2001
let precoMaior = 0
let nomeMenor
let nomeMaior

while(orcamento > 0){
    // Pedir o nome e o valor de um jogo
    let nomeAtual = prompt('Digite o nome do jogo')
    let valorAtual = Number(prompt('Digite o valor do jogo'))
    // Descontar o valor do jogo do orçamento
    orcamento = orcamento - valorAtual
    // Verificar se o orçamento está disponível, para fazer a soma
    if(orcamento >= 0) {
        quantidadeJogos++
        totalGasto = totalGasto + valorAtual
        // Verificar maior
        if(valorAtual > precoMaior){
            precoMaior = valorAtual
            nomeMaior = nomeAtual
        }
        // Verificar menor
        if(valorAtual < precoMenor){
            precoMenor = valorAtual
            nomeMenor = nomeAtual
        }
    } else {
        resultado03.innerHTML += (`O jogo ${nomeAtual} ultrapassou o orçamento e não foi incluido na sua compra\n. `)
    }
}

if(totalGasto > 0) {
    resultado03.innerHTML += (`O total gasto foi R$${totalGasto} com ${quantidadeJogos} jogos\nO jogo mais barato é o ${nomeMenor} - R$${precoMenor}\nO jogo mais caro é o ${nomeMaior} - R$${precoMaior}. \n`)
} else {
    resultado03.innerHTML += (`Nenhuma compra foi realizada.`)
}