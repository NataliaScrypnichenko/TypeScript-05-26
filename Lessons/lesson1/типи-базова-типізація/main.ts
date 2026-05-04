let a:number = 123;
let b: boolean=true;
let c:string='hello world';
 // про типізувати домашню роботу
// any- означає все
// void- якщо функція нічого не повертає має таку прописку
function foo(arg1:number,arg2:number):number {
           return arg1+arg2;
}// якщо протипізовано числами то інше не можливо вписати
// foo('be','come');= дає помилку

// []
let arr:number[]=[];
arr.push(99);
arr.push(909);

