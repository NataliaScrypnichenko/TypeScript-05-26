"use strict";
//#bq1zkx7WP
//*** (подібне було вище, але…будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн,
// але !!! зміна ціни відбувається тільки на перезавантаження,
// які відбулись пізніше ніж 10 секунд після попереднього.
//
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
//
let price1 = +(localStorage.getItem('price') || 0);
//перевіряємо якщо ціни ще немає — ставимо 100,якщо это збыльшуэмо
if (price1 === null) {
    price1 = 100;
}
else {
    price1 = +price1;
}
// минулий час візиту
let lastVisit1 = +(localStorage.getItem('lastVisit') || 0);
//створю поточний час
let now = new Date().getTime();
// різниця між візитами 1с= 10000мілісекунд
if (lastVisit1 !== null) {
    let differentTime = now - lastVisit1;
    if (differentTime > 10000) {
        price1 += 10;
    }
    // console.log(differentTime);
}
// додаю ключ і значеення і зберігаю
localStorage.setItem('price', price.toString());
localStorage.setItem('lastVisit', now.toString());
// записую в дів на сторінку
let div1 = document.getElementById('price');
div1.innerText = price + " грн";
// console.log(now);
// console.log(lastVisit);
