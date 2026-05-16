"use strict";
//– є масив чисел [10,8,-7,55,987,-1011,0,1050,0], за допомоги map  перетворити
// всі об’єкти в масиві на стрінгові.
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let newNumber = numbers.map(number => number + '');
console.log(newNumber);
