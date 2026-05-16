"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//– Взяти масив з  User[] з попереднього завдання #XjJuucOMR0,
// та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
//@ts-ignore
function User(id, name, surname, email, phone) {
    //@ts-ignore
    this.id = id;
    //@ts-ignore
    this.name = name;
    //@ts-ignore
    this.surname = surname;
    //@ts-ignore
    this.email = email;
    //@ts-ignore
    this.phone = phone;
}
//@ts-ignore
const users = [
    //@ts-ignore
    new User(1, 'Nata', 'Smith', 'vnh@gmail.com', '+380678905678'),
    //@ts-ignore
    new User(2, 'Emma', 'Brown', 'vnh@gmail.com', '+380678905678'),
    //@ts-ignore
    new User(3, 'Nata', 'Johnson', 'vnh@gmail.com', '+380678905678'),
    //@ts-ignore
    new User(4, 'Olivia', 'Davis', 'vnh@gmail.com', '+380678905678'),
    //@ts-ignore
    new User(5, 'Daniel', 'Moore', 'vnh@gmail.com', '+380678905678'),
    //@ts-ignore
    new User(6, 'Sophia', 'Miller', 'vnh@gmail.com', '+380678905678'),
    //@ts-ignore
    new User(7, 'Rama', 'Wilson', 'vnh@gmail.com', '+380678905678'),
    //@ts-ignore
    new User(8, 'Sasha', 'Taylor', 'vnh@gmail.com', '+380678905678'),
    //@ts-ignore
    new User(9, 'Pasha', 'Anderson', 'vnh@gmail.com', '+380678905678'),
    //@ts-ignore
    new User(10, 'Anna', 'Thomas', 'vnh@gmail.com', '+380678905678')
];
//@ts-ignore
let userFilter = users.filter((user) => user.id % 2 === 0);
console.log(userFilter);
