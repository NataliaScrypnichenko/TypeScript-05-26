//використовуємо type як модель данних для чогось

type UserType={
    name: string,
    age: number,
    status: boolean,
}
// як розширити доступ до UserType якщо не має доступу

type UserType2= UserType & {id:number, } & {}; // це називається - intersection- тобто накладання аба перетенання чогось
// також можна багато робити таких обгорток навколо одної обгортки


let users: UserType2[] = [
    {id: 1, name: 'petya', age: 30, status: true},
    {id: 2, name: 'kolya', age: 29, status: true},
    {id: 3, name: 'max', age: 30, status: true},
    {id: 4, name: 'vasya', age: 31, status: false},
    {id: 5, name: 'olya', age: 28, status: false},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
];
// можна через тип визначити функцію

type MyFn=(a:number)=>void;
