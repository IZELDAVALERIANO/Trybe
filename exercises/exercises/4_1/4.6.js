/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com
 letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals*/

let peças = "rainha";
switch (peças.toLowerCase('peão')) {
    case 'peão':
        console.log("os peões se movem somente para frente")
        break;
    case 'Bispo':
        console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro")
    case 'torre':
        console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas')
    case 'cavalo': 
        console.log('O cavalo é a única peça do tabuleiro que pode pular sobre outras peças.')
    case 'rainha' :
        console.log('Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente')
    case 'rei': 
        console.log('O rei pode se mover para qualquer casa adjacente.')
        default:
        console.log('Peça ivalida')
        break;
};
