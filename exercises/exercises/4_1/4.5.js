/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
Para os ângulos serem de um triângulo válido, 
a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.*/
 var ladoA = 50;
 var ladoB = 40;
 var ladoC = 90;
 
 var triangulo = ladoC + ladoA + ladoB;

 if (triangulo == 180) {
     console.log("verdadeiro")
 } else { console.log("false")}
