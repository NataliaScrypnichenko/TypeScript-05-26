"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//#gEFoxMMO
//– створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('<ul>');
let listNumberString = (array) => {
    for (let item of array) {
        document.write(`<li> ${item} </li>`);
    }
};
document.write('</ul>');
console.log(listNumberString([4, 5, 77, 88, 'pen', 'word']));
