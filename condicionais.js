/*let dinheiro = 8500

if(dinheiro >= 10000) {
    alert("Partiu Viajar!")
} else {
    alert("Não vou viajar")
}*/

/*
let n1 = prompt("Digite a sua primeira nota")
let n2 = prompt("Digite a sua segunda nota")
let n3 = prompt("Digite a sua terceira nota")

let resultado = (ParseFloat (n1)+ParseFloat(n2)+ParseFloat(n3)) /3

if(resultado >= 6){
alert("Sua nota foi"+resultado+" você passou de ano")
} else {
    alert("Sua nota foi" +resultado+" você foi reprovado")
}

alert("A sua média foi: "+Math.round(resultado))
*/

/*
let n1 = prompt("Digite um numero")
let n2 = prompt("Digite outro numero")

if(n1 > n2){
    alert("O numero"+ n1+" é maior ")
} 
else{
    alert("O numero"+ n2+ "é maior")
}
*/

/*
let a = prompt("Digite um valor")
let b = prompt("Digite um valor")
let c = prompt("Digite um valor")
let d = prompt("Digite um valor")

if(b > c && d > a && c + d > a + b && c > 0 && d > 0 ) {
    alert("Valores aceitos")

} else{
alert("Valores não aceitos")
}
*/

/*
let ano = prompt("Digite o ano que voce nasceu")

let idade = ano - 2023

if(idade <= 18 && idade<=65){
alert("Voce tem "+idade+" anos e pode votar")
} 
else{
    alert("Voce tem "+ idade +" anos e nao pode votar")
    
}
*/

/*
let n1 = prompt("Digite a sua primeira nota")
let n2 = prompt("Digite a sua segunda nota")
let n3 = prompt("Digite a sua terceira nota")

let resultado = (parseFloat (n1)+parseFloat(n2)+parseFloat(n3)) /3

if(resultado >= 6){
alert("Sua nota foi"+resultado+" você passou de ano")
} 
else if(resultado >= 4 && resultado <=5){
    alert("Sua nota foi"+resultado+" você está de recuperação")
}
else {
    alert("Sua nota foi" +resultado+" você foi reprovado")
}

alert("A sua média foi: "+Math.round(resultado))
*/

/*
let nivel = prompt("Digite o nivel")
let horas = prompt("Digite as horas trabalhadas")

if(nivel == 1){
    let resultado = parseInt(horas)*12
    alert("professor" +nivel+ "vai receber" +resultado)
}

else if(nivel == 2){
    let resultado = parseInt(horas)*17
    alert("professor" +nivel+ "vai receber" +horas)
}

else if(nivel == 3){
    let resultado = parseFloat(horas)*25
    alert("professor" +nivel+ "vai receber" +horas)
}

else{
    alert("Código Inválido")
}
*/

let peso = prompt("Digite o peso")
let altura = prompt("Digite a altura")

let imc = (parseFloat (peso)+parseFloat(altura))^2

if(imc<= 18.5){
    alert ("O seu" +imc+ "é")
}

else if(imc >= 18.5 && imc <= 24.9){
    alert ("O seu" +imc+ "é")
}

else if(imc >= 24.9 && imc <=29.9){
    alert ("O seu" +imc+ "é")
}

else if(imc >= 29.9 && imc <=34.9){
    alert ("O seu" +imc+ "é")
}

else if(imc >=34.9 && imc <=39.9){
    alert ("O seu" +imc+ "é")
}

else if(imc >=39.9){
    alert ("O seu" +imc+ "é")
}
