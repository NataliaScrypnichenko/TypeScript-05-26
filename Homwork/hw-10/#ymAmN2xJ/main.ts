const formName = document.getElementById('f1') as HTMLFormElement;

const p11 = document.getElementById('p') as HTMLParagraphElement;


formName.addEventListener('submit', (event) => {

    event.preventDefault();

    // дістаємо input елементи namedItem() — це метод, який шукає елемент форми по name.
    const nameInput =
        formName.elements.namedItem('name') as HTMLInputElement;

    const surnameInput =
        formName.elements.namedItem('surname') as HTMLInputElement;

    const ageInput =
        formName.elements.namedItem('age') as HTMLInputElement;

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
