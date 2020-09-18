//Por fim, faça uma pirâmide com n asteriscos de base:
let n = 5;
let aster = "*";
let linha = "";
let coluna;

let metade = (n + 1) / 2;
let direita = metade;
let esquerda = metade;

for (let index = 0; index <= metade; index++) {
    for (coluna = 1; coluna <= n; coluna++) {
       if(linha > direita && linha < esquerda){
           linha += aster;
       } else {
           linha  += " ";
       }
    }
    console.log(linha);
    linha = "";
    esquerda -= 1;
    direita += 1;
};