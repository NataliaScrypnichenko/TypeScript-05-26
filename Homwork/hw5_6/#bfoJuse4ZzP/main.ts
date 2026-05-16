//– Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
//     let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]


let str:string = "Ревуть воли як ясла повні";

function stringToarray(str:string) {
 const newStr = str.split(' ');
 return newStr;
};

let arr = stringToarray(str);
console.log(arr);

// function stringToarray(str){
//     if (str) { // перевірка на фолсоподибнисть
//         const newStr = str.split(' ');
//         return newStr;
//     }
//     return [''];
// };
// console.log(stringToarray(''));;
