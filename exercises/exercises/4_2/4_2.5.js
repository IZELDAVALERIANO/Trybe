//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let element
for (let index = 0; index < numbers.length; index++) {
    element = Math.max(numbers[index])
}
console.log(element)