
// let resultado = document.getElementById('divResultado')
// console.log(resultado);
// resultado.innerHTML = "Olá, eu sou uma div"

// let cont = 0
// while(cont<10){
//     //console.log(cont)
//     resultado.innerHTML += cont + "patinho foi passear .... <br>"
//     cont++
// }

let exercicio01 = document.getElementById('exercicio01')
let cont = 1
while(cont < 11){
    exercicio01.innerHTML += "<br>" + cont ** 2 + " isso é o quadrado do " + cont + "<br>"
    cont ++
}

