
//створити ячейку в localStorage

let numbers1:number = +(localStorage.getItem('number') || 0);
//збільшую число
numbers1 += 1;
//додаю ключ і значеення

localStorage.setItem('number', numbers.toString());
// записую в дів на сторінку
//document.getElementById('div').innerText = numbers101.toString()
const div11 = document.getElementById('div') as HTMLDivElement;

div11.innerText = numbers1.toString();

