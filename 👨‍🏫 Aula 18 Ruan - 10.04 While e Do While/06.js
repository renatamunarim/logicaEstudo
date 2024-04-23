let resultado06 = document.getElementById("resultado06")
let numero = Math.ceil(Math.random() * 100)
let tentativas
let chute = Number(prompt(`Você tem 10 tentativas para acertar um numero: Digite`))
for(tentativas = 1; tentativas <= 10; tentativas++){
    if(numero > chute){
        resultado06.innerHTML += (`Seu chute foi baixo, tente novamente, você tem ${10 - tentativas}`)
    }else if (numero < chute){
        resultado06.innerHTML += (`Seu chute foi alto, tente novamente, você tem ${10 - tentativas}`)        
    }else (numero == chute)
        resultado06.innerHTML += (`Seu chute foi certo. Parabéns!\n Você precisou de ${tentativas}para acertar`)
}