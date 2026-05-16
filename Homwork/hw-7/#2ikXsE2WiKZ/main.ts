//– Взяти масив з  User[] з попереднього завдання #XjJuucOMR0,
// та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

class User7 {
    private _id: number;
    private _name: string;
    private _surname: string;
    private _email: string;
    private _phone: string;
    // створюю віртуальне поле
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    constructor (id:number, name:string, surname:string , email:string, phone:string)
    {

        this._id = id;
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._phone = phone;
   }
};

const users:User7[]=[
    new User7(1,'Nata','Smith','vnh@gmail.com','+380678905678'),
    new User7(2,'Emma','Brown','vnh@gmail.com','+380678905678'),
    new User7(3,'Nata','Johnson','vnh@gmail.com','+380678905678'),
    new User7(4,'Olivia','Davis','vnh@gmail.com','+380678905678'),
    new User7(5,'Daniel','Moore','vnh@gmail.com','+380678905678'),
    new User7(6,'Sophia','Miller','vnh@gmail.com','+380678905678'),
    new User7(7,'Rama','Wilson','vnh@gmail.com','+380678905678'),
    new User7(8,'Sasha','Taylor','vnh@gmail.com','+380678905678'),
    new User7(9,'Pasha','Anderson','vnh@gmail.com','+380678905678'),
    new User7(10,'Anna','Thomas','vnh@gmail.com','+380678905678')
];
 // щоб не було помилки тут то потрібно робити гетери і сетири
 let userFilter= users.filter((user)=> user.id %2 ===0);
 console.log(userFilter);
