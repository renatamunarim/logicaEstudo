// let contador = 1
// while (contador <= 10){
//     // console.log(contador)
//     alert(contador)
//     // Incremento
//     contador++
// }

let resultado01 = document.getElementById("resultado01")
let contador = 1
let textoCompleto = ""

while (contador <= 10){
    // Aumentar o texto completo com contador e \n
    textoCompleto += contador + "\n"
    // Incremento
    contador++
}

resultado01.innerHTML += (textoCompleto)