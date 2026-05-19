"use strict";
//– створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
;
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
let clients = [
    new Client(1, 'Nata', 'Smith', 'vnh@gmail.com', '+380678905678', [{ title: 'coffee', price: 123 }, { title: 'salt', price: 456 }]),
    new Client(2, 'Nata', 'Smith', 'vnh@gmail.com', '+380678905678', [{ title: 'fish', price: 78 }, { title: 'salt', price: 67 }, { title: 'bread', price: 89 }, { title: 'salad', price: 34 }]),
    new Client(3, 'Petay', 'Smith', 'vnh@gmail.com', '+380678905678', [{ title: 'coffee', price: 123 }, { title: 'salt', price: 67 }, { title: 'bread', price: 89 }, { title: 'salad', price: 34 }]),
    new Client(4, 'Masha', 'Smith', 'vnh@gmail.com', '+380678905678', [{ title: 'coffee', price: 123 }, { title: 'salt', price: 67 }, { title: 'bread', price: 89 }, { title: 'salad', price: 34 }]),
    new Client(5, 'Nata', 'Smith', 'vnh@gmail.com', '+380678905678', [{ title: 'coffee', price: 123 }, { title: 'salad', price: 34 }, { title: 'salt', price: 67 }, { title: 'bread', price: 89 }, { title: 'salad', price: 34 }]),
    new Client(6, 'Dana', 'Smith', 'vnh@gmail.com', '+380678905678', [{ title: 'coffee', price: 123 }, { title: 'salt', price: 67 }, { title: 'bread', price: 89 },]),
    new Client(7, 'Nata', 'Smith', 'vnh@gmail.com', '+380678905678', [{ title: 'coffee', price: 123 }, { title: 'salad', price: 34 }]),
    new Client(8, 'Nata', 'Smith', 'vnh@gmail.com', '+380678905678', [{ title: 'coffee', price: 123 }]),
    new Client(9, 'Nata', 'Smith', 'vnh@gmail.com', '+380678905678', [{ title: 'coffee', price: 123 }, { title: 'salad', price: 34 }]),
    new Client(10, 'Nata', 'Smith', 'vnh@gmail.com', '+380678905678', [{ title: 'coffee', price: 123 }, { title: 'salt', price: 67 }, { title: 'bread', price: 89 }, { title: 'salad', price: 34 }]),
];
console.log(clients);
