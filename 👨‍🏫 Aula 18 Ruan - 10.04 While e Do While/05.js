let resultado05 = document.getElementById("resultado05")
let nomeDaMusica
let tempoDaMusica
let totalTempo = 0
let horas
let minutos
while(nomeDaMusica != 0){
    nomeDaMusica = prompt(`Qual o nome da mùsica?`)
    tempoDaMusica = Number(prompt(`Qual o tempo de duração da música em minutos`))
    totalTempo += tempoDaMusica
}
horas = parseInt(totalTempo / 60)
minutos = totalTempo % 60

resultado05.innerHTML += (`Tempo total de festival ${horas} : ${minutos}`)