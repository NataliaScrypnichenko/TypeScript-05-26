// interface IUser {
//     name: string;
//     age: number;
//     status: boolean;
// };
// let users: IUser[] = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];


//  чи можемо на основі interface IUser розширити його можемо, але є нюанс
// interface IUser2 extends IUser {
//     id: number;
// }


// можна об'єднати і так розширити
interface IUser {
    name: string;
    age: number;
    status: boolean;
};
interface IUser {
   id: number;
};

let users: IUser[] = [
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

// який варіант використовувати пере називати це є гнучкий варіант (interface IUser2 extends IUser{})
