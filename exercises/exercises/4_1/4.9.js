/*Escreva um programa que defina três números em letiáveis no seu começo e retorne true se uma das três for ímpar. 
Caso contrário, ele deve retornar false.*/

let number1 = 5;
let number2 = 7;
let number3 = 8;

let number = false;
if((number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0)){
 number = true
}

console.log(number);