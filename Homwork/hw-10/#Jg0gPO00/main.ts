// створити конвертор ваги з кг в фунти.
//     дані заповнюються через інпут.
//     При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


const input23:HTMLInputElement = document.getElementById('in') as HTMLInputElement;
const p: HTMLParagraphElement = document.getElementById('p') as HTMLParagraphElement;

input23.oninput=function (){

    const kilo:number = +input.value;
    // console.log(kilo);
    let result:number = kilo * 2.2;
    // console.log(result);

    p.innerText = result.toString();

};
