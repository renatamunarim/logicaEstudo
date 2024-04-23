let resultado04 = document.getElementById("resultado04")
let numero = Number(prompt(`Digite um valor que você quer saber se é primo`))
let divisor = 2
let primo = false
while(divisor < numero){
    if(numero % divisor == 0){
        primo = false
    }
    divisor ++
}
if(primo){
    resultado04.innerHTML += (`É primo`)
}else{
    resultado04.innerHTML += (`Não é primo`)
}