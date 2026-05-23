"use strict";
// #j693ca8
// <input  id="ageinput" >
// <button  id="check"></button>
//<div id="message"></div>
// – створити інпут, який приймає вік людини,
// та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік,
// чи менше він за 18, та повідомити про це користувача
let input = document.getElementById('ageInput');
let button = document.getElementById('check');
button.innerText = 'checking age';
let messageDiv = document.getElementById('message');
button.onclick = function () {
    //з читую яку інформацию вели
    let age = Number(input.value);
    // перетворюємо в число
    //перевірка данних
    if (isNaN(age)) {
        messageDiv.innerText = 'веди число';
        return;
    }
    if (age > 18) {
        messageDiv.innerText = 'надано доступ';
    }
    if (age < 18) {
        messageDiv.innerText = 'ще не має 18 років((';
    }
    ;
};
