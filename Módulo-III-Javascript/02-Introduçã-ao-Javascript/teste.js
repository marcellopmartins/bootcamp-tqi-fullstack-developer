function returnEvenValues(array){
    let EvenNums = [];
for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0 ) {
     EvenNums.push(array[i]);
    } else {
        console.log( array[i], ' Não é um número par');
    } 
}
console.log('Os números pares são:  ', EvenNums);
}
let array2 = [1,2,4,5,7,8];
returnEvenValues(array2);




