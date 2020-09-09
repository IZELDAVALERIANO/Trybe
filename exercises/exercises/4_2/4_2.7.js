//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let elementMin = 0;
for (let index = 0; index < numbers.length; index++) {
    elementMin = Math.min(numbers[index])  
}
console.log(elementMin)  