"use strict";
//   #bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
Object.defineProperty(exports, "__esModule", { value: true });
let strValue = prompt('enter number 1, 0, -3');
if (strValue !== null) {
    let numValue = Number(strValue); //+strValue
    if (numValue !== 0) {
        console.log('Вірно');
    }
    else {
        console.log('Невірно');
    }
    ;
}
