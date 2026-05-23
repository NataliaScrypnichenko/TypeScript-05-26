"use strict";
// – Створити довільний елемент з id = text
// та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
let div10 = document.getElementById('text');
let button10 = document.getElementsByTagName('button')[0];
button10.innerHTML = 'deleter';
button10.onclick = function () {
    div10.remove();
};
