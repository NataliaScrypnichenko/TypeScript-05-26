// //як знайти
// //HTMLCollectionOf- це клас, <Element>=це дженерик-сюди відноситься будь-який тег
//  const elementsByClassNameTarget:HTMLCollectionOf<Element>=document.getElementsByClassName('target');
//
// console.log(elementsByClassNameTarget);
//
// const elementsByTagNameDiv:HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
// //Дженерік <HTMLDivElement>= <>= дозволяє сказати що буде знаходитися в середині HTMLCollectionOf
// // for(const div of elementsByTagNameDiv){
// //    //div.  = потрібно дивитися в сигнатурі(натискаєш крапку і дивишся)
// // }
//
//
// const forms:HTMLCollectionOf<HTMLFormElement> = document.forms;
// // forms[0].name('.  можемо побачити що до ццццього типу притамані ф-ии')
// const f1:HTMLFormElement = forms[0];
// //дістати інпути
// console.log(f1.username);// може бути помилка то пишемо по іншому
// console.log(f1['username']);
// // f1['username'].value = f1['username'];
// let f1Element:HTMLInputElement=f1['username']
// console.log(f1Element);
// //  Через крапку можна також звернутися до характеристики інпута  f1Element.....
//
//
// //створити елемент
// const p:HTMLParagraphElement = document.createElement('p');
// p.title

type userType={
    name: string,
    age: number,
    status:boolean,
}

let users:userType[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {

    const div:HTMLDivElement = document.createElement('div');
    div.innerText = user.name;
    document.body.appendChild(div);
}


function appender(tag:keyof HTMLElementTagNameMap) {
    document.createElement(tag)
}
