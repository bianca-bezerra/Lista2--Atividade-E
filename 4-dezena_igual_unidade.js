/*4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.*/

import { question } from "readline-sync";

function main(){

//Entrada
const numero = Number(question('Numero (2 digitos):'))

//Processamento
const verificação = verificar_dezena_unidade(numero)

//Saída
console.log(verificação)

//Função
function verificar_dezena_unidade(numero){
    if (Math.floor(numero/10) === numero % 10){
        return (`Algarismo de dezena e de unidade são iguais`)
    }else{
        return (`Algarismo de dezena e de unidade são diferentes`)
    }
}
}
main()