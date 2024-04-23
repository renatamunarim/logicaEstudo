// Supondo que a população de um país A seja de 80.000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B.
let resultado02 = document.getElementById("resultado02")
let populacaoA = 80000
let populacaoB = 200000
let quantidadeAnos = 0
while(populacaoA < populacaoB){
    // populacaoA = populacaoA * (103/100)
    populacaoA = populacaoA * 1.03
    // populacaoA *= 1.03

    // populacaoB = populacaoB * (101.5/100)
    populacaoB = populacaoB * 1.015

    // Incrementar mais um ano
    quantidadeAnos++
}
resultado02.innerHTML += (`A população A ultrapassa a população B após ${quantidadeAnos} anos`)


