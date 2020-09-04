/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let porcentagemNota = 20;
if ( porcentagemNota < 0 || porcentagemNota > 100){
    console.log("erro")
}
 else if( porcentagemNota >= 90){
     console.log('A')
 } else if (porcentagemNota >=80) {
     console.log('B')
 } else if (porcentagemNota >= 70) {
     console.log('C')}
     else if (porcentagemNota >=60) {
         console.log('D')
     } else if (porcentagemNota >= 50) {
         console.log('E')
     } else (porcentagemNota < 50); {
         console.log('F')}
    
            
