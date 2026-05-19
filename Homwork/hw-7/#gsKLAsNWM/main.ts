//#gsKLAsNWM
//*Через Array.prototype. створити власний foreach, filter

// власний foreach
//якщо дублюється по факту ім'я то звиртаємося до існуючого арея

interface Array<T>{
    myForEach(callback :(value:T)=>void):void;
}

//@ts-ignore
Array.prototype.myForEach = function<T> (callback:any) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i],i,this);
    };
};
//@ts-ignore
type userType={
    name: string,
    age: number,
    status: boolean,
}
//@ts-ignore
let users:userType[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//@ts-ignore
users.myForEach(values => {
    console.log(values)
});

//filter
interface Array<T>{
    myFilter(callback :(value:T)=>boolean):T[];
}

//@ts-ignore
Array.prototype.myFilter = function<T> (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        };
    };
    return result;
};
//@ts-ignore
console.log(users.myFilter(user => user.age > 28));

