// На основі попередньго уроку
interface IAnimal{
    isAlive:boolean;
    sound:()=>void;
}

interface X extends IAnimal{
    id:number;
}

// можно декілька вказувати interface - це імплеметація тобто це впровадження декількох контрактів тобто BirnClass зобов'язаний відповідати моделлю даних IAnimal, X

 class BirnClass implements IAnimal, X{

     constructor(isAlive: boolean, wings: boolean, id: number) {
         this._isAlive = isAlive;
         this._wings = wings;
         this._id = id;
     }

     private _isAlive: boolean;
     private _wings:boolean;
     private _id:number;


     get wings(): boolean {
         return this._wings;
     }

     set wings(value: boolean) {
         this._wings = value;
     }

     get id(): number {
         return this._id;
     }

     set id(value: number) {
         this._id = value;
     }

     get isAlive(): boolean {
         return this._isAlive;
     }

     set isAlive(value: boolean) {
         this._isAlive = value;
     }

     sound(): void {
     }


 }
// interface можуть між собою екстендитися з класами вони імплементуютью interface - це завжди контракт який визначає яким чином пений клас повинний виглядати в обов'язковому порядку, тобто клос може мати свої поля якщо так потрібно
