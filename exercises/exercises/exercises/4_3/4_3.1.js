/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n 
, seja n > 1, imprima na tela um quadrado feito 
de asteriscos de lado de tamanho n. Por exemplo:*/

let n = 5;
let aster = "*";
let imput = "";

for (let index = 0; index < n; index++) {
 (imput = imput + aster);
};
for (let index = 0; index < n; index++) {
    console.log(imput)
}