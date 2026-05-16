//– Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
let message:string='hello world';
let lorem:string='lorem ipsum';
let js:string = 'javascript is cool';
console.log(message.toUpperCase());//
console.log(lorem.toUpperCase());//11
console.log(js.toUpperCase());//18

const stringElem:string[] =[message,lorem,js];
for (const element of stringElem) {
    console.log(element.toUpperCase());
}
