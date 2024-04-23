// 8
// Pedir numeros positivos e parar se for zero ou menos

// Iniciar uma variável com um valor inicial que atenda a condição do while
let resultado08 = document.getElementById("resultado08")
let numero = 1
let soma = 0
let quantidade = 0
// Parar se for zero ou menos
while(numero > 0) {
    numero = Number(prompt('Digite um número positivo e, caso queira parar, digite zero ou menos'))

    // Verificar se o número é positivo, para somar
    if(numero > 0){
        // Acumular a soma
        soma = soma + numero
        // Aumentar a quantidade
        quantidade++
    }
}
let media = soma / quantidade
resultado08.innerHTML += (`A média dos positivos digitados é ${media.toFixed(2)}`)