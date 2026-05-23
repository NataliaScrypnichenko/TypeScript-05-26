"use strict";
const formName = document.getElementById('f1');
const p11 = document.getElementById('p');
formName.addEventListener('submit', (event) => {
    event.preventDefault();
    // дістаємо input елементи namedItem() — це метод, який шукає елемент форми по name.
    const nameInput = formName.elements.namedItem('name');
    const surnameInput = formName.elements.namedItem('surname');
    const ageInput = formName.elements.namedItem('age');
    // створюємо об'єкт
    const obj = {
        name: nameInput.value,
        surname: surnameInput.value,
        age: ageInput.value
    };
    console.log(obj);
    p11.innerText =
        obj.name + ' ' +
            obj.surname + ' ' +
            obj.age;
});
