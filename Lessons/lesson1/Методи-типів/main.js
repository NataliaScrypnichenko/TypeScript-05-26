"use strict";
//масив з об'єкт
Object.defineProperty(exports, "__esModule", { value: true });
// let users:{name:string, age: number, status:boolean}[] = [
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'max', age: 31, status: true}
// ];
// є плагіни які будують модель даних швидко
//  type UserType= {
//     name:string,
//      age: number,
//      status:boolean,
//      asd?: string,// якщо не впевнені що це може мати всі
//  }
// let users:UserType[] = [
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'max', age: 31, status: true}
// ];
//методи типів type
//
// type UserType= {
//     name:string,
//     age: number,
//     status:boolean,
//     greeting:(str:string)=>string,
// }
// let users:UserType[] = [
//     { greeting:(str:string)=>'hello', name: 'olya', age: 28, status: false},
//     {greeting:(str:string)=>'Hello',name: 'max', age: 30, status: true},
//
// ];// дуже схоже на класи
// Варіанти опису моделей. Класи та Інтерфейси
//Інтерфейси це своєрідний контракт, щоб вказати обов'язкове поле то пишемо ?
// interface IUser{
//     name: string;
//     age: number;
//     status:boolean;
//     greeting?:(str:string)=>string;
// }
// let users:IUser[] = [
//     { greeting:(str:string)=>'hello', name: 'olya', age: 28, status: false},
//     {greeting:(str:string)=>'Hello',name: 'max', age: 30, status: true},
// ];
// class - пишеться без префиксив пишемо і поля повинні мати ініціалоізації
class User {
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
        this.name = name;
        this.age = age;
        this.status = status;
    }
    //в класі можно описати як буде працювати фунцція для кожного об'єкта.клас це шаблон
    greeting() {
        console.log('vdjhgd');
    }
}
//створюєм
const user = new User('nata', 24, true);
let users = [
    new User('sara', 45, true), // не має грітін тому що, знаходиться під капотом в моделі
    new User('yna', 45, true)
];
console.log(users);
