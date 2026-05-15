"use strict";
//#EKRNVPM
// створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів
// масиву та повертає його. Приклад sum([1,2,10]) //->13
// Object.defineProperty(exports, "__esModule", { value: true });
function sum(arr) {
    let suma = 0;
    for (let item of arr) {
        suma = suma + item;
    }
    return suma;
}
;
console.log(sum([1, 2, 10])); //13
