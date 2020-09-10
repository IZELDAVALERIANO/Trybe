
//Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    for (let indice = 0; indice < index; indice++) {
        if(numbers[index] < numbers[indice]){
            let element = numbers[index];

            numbers[index] = numbers[indice];
            numbers[indice] = element;
        }
        
    }
}
console.log(numbers)