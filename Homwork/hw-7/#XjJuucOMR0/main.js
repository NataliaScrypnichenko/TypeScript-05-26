"use strict";
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)
class User {
    // private видимі тільки в межах класу звернутися можемо тільки через гетери і сети через generate із заннятя замикання
    //
    //  private _id:number;
    //  private _name:string;
    //  private _surname:string;
    // private _email:string;
    //  private _phone:string;
    //
    //  get phone(): string {
    //      return this._phone;
    //  }
    //
    //  set phone(value: string) {
    //      this._phone = value;
    //  }
    //
    //  get surname(): string {
    //      return this._surname;
    //  }
    //
    //  set surname(value: string) {
    //      this._surname = value;
    //  }
    //
    //  get name(): string {
    //      return this._name;
    //  }
    //
    //  set name(value: string) {
    //      this._name = value;
    //  }
    //
    //  get id(): number {
    //      return this._id;
    //  }
    //
    //  set id(value: number) {
    //      this._id = value;
    //  }
    //
    //  get email(): string {
    //      return this._email;
    //  }
    //
    //  set email(value: string) {
    //      this._email = value;
    //  }
    // все те саме що було до цього використано
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        // this.id = id;
        // this.name = name;
        // this.surname = surname;
        // this.email = email;
        // this.phone = phone;
    }
    ;
}
const users = [
    new User(1, 'Nata', 'Smith', 'vnh@gmail.com', '+380678905678'),
    new User(2, 'Emma', 'Brown', 'vnh@gmail.com', '+380678905678'),
    new User(3, 'Nata', 'Johnson', 'vnh@gmail.com', '+380678905678'),
    new User(4, 'Olivia', 'Davis', 'vnh@gmail.com', '+380678905678'),
    new User(5, 'Daniel', 'Moore', 'vnh@gmail.com', '+380678905678'),
    new User(6, 'Sophia', 'Miller', 'vnh@gmail.com', '+380678905678'),
    new User(7, 'Rama', 'Wilson', 'vnh@gmail.com', '+380678905678'),
    new User(8, 'Sasha', 'Taylor', 'vnh@gmail.com', '+380678905678'),
    new User(9, 'Pasha', 'Anderson', 'vnh@gmail.com', '+380678905678'),
    new User(10, 'Anna', 'Thomas', 'vnh@gmail.com', '+380678905678')
];
console.log(users);
