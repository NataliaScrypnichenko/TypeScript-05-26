"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//– Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
class User7 {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
    ;
}
const users73 = [
    new User7(1, 'Nata', 'Smith', 'vnh@gmail.com', '+380678905678'),
    new User7(2, 'Emma', 'Brown', 'vnh@gmail.com', '+380678905678'),
    new User7(3, 'Nata', 'Johnson', 'vnh@gmail.com', '+380678905678'),
    new User7(4, 'Olivia', 'Davis', 'vnh@gmail.com', '+380678905678'),
    new User7(5, 'Daniel', 'Moore', 'vnh@gmail.com', '+380678905678'),
    new User7(6, 'Sophia', 'Miller', 'vnh@gmail.com', '+380678905678'),
    new User7(7, 'Rama', 'Wilson', 'vnh@gmail.com', '+380678905678'),
    new User7(8, 'Sasha', 'Taylor', 'vnh@gmail.com', '+380678905678'),
    new User7(9, 'Pasha', 'Anderson', 'vnh@gmail.com', '+380678905678'),
    new User7(10, 'Anna', 'Thomas', 'vnh@gmail.com', '+380678905678')
];
//@ts-ignore
let userSort = users73.sort((user1, user2) => user2.id - user1.id);
console.log(userSort);
