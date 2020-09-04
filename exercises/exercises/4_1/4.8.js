/* Escreva um programa que defina três números em variáveis no seu começo 
e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if.*/

var number1 = 2;
var number2 = 3;
var number3 = 4; 

var number = false

if((number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0 )) {
    number = true
} 
console.log(number)