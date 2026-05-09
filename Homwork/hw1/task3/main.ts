//Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом.
// Кожен автор має поля name та age
 // authors:{name:string,age:number}[]
type author={name:string,age:number}
type Book={
    title: string,
    pageCount: number,
    gener:string,
    authors: author[],
}

let book1:Book = {
    title:"JavaScript",
    pageCount: 400,
    gener:"science",
    authors:[{name:'Taras', age:45},{name:'Jana', age:40},{name:'yra',age:23}],
};
let book2:Book = {
    title:"Memory",
    pageCount: 200,
    gener:"psychology",
    authors:[{name:'Taras', age:45},{name:'Jana', age:40}],
};
let book3:Book = {
    title: "Joan of Arc",
    pageCount: 157,
    gener: "historical",
    authors:[{name:'Anna', age:45},{name:'Jana', age:40},{name:'Pasha',age:23},{name:'yra',age:23}],
};
console.log(book1);
