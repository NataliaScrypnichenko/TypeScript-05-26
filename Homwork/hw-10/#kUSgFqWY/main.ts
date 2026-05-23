//     //#kUSgFqWY
// // Створити 3 інпута та кнопку.
//     // Один визначає кількість рядків,
//     // другий – кількість ячеєк,
//     // третій – вміст ячеєк.
//     // При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом

//@ts-ignore
const tableForm:any= document.forms["tableForm"] as HTMLFormElement;

const inputRow=document.getElementById("row") as HTMLInputElement;
const inputCell=document.getElementById("cell") as HTMLInputElement;
const inputText=document.getElementById("tExt") as HTMLInputElement;
//
// let button=document.getElementById("bt");
 const table=document.getElementById("l1") as HTMLTableElement;


tableForm.onsubmit= function (event:any) {
    //чистимо дані щоб таблиця нв таблицю не шла
    table.innerText='';
    //щоб сторінка не перезавантажувалась
    event.preventDefault();
//зчитуємо інформацію форми інпутів
    const rowsValue= +tableForm.inputRow.value;
    const cellsValue= +tableForm.inputCell.value;
    const textValue= tableForm.inputText.value;
    console.log(rowsValue, cellsValue, textValue);

    //будуємо структуру,коли не має певної кількость як будувати то використовуємо цикл
    //будуємо рядок
   for (let i=1; i< rowsValue; i++) {

       const tr:HTMLElement = document.createElement('tr');
       //будуємо ячейку
       for (let j=0; j< cellsValue; j++) {
           const tc:HTMLElement=document.createElement('tc');
           tc.textContent= '' + textValue;
           tr.appendChild(tc);
       }
       table.appendChild(tr);
   };

};
