"use strict";
//– Взяти масив з  User[] з попереднього завдання #XjJuucOMR0,
// та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
Object.defineProperty(exports, "__esModule", { value: true });
class User7 {
    // створюю віртуальне поле
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get surname() {
        return this._surname;
    }
    set surname(value) {
        this._surname = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    constructor(id, name, surname, email, phone) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._phone = phone;
    }
}
;
const users = [
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
// щоб не було помилки тут то потрібно робити гетери і сетири
let userFilter = users.filter((user) => user.id % 2 === 0);
console.log(userFilter);
