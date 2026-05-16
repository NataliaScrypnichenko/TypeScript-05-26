"use strict";
//#5kla3yMpgp
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        //@ts-ignore
        this.model = model;
        //@ts-ignore
        this.manufacturer = manufacturer;
        //@ts-ignore
        this.year = year;
        //@ts-ignore
        this.maxSpeed = maxSpeed;
        //@ts-ignore
        this.engineVolume = engineVolume;
    }
    ;
    drive() {
        //@ts-ignore
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    ;
    info() {
        for (const keys in this) {
            console.log(keys, this[keys]);
        }
    }
    ;
    increaseMaxSpeed(newSpeed) {
        //@ts-ignore
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    ;
    changeYear(newValue) {
        //@ts-ignore
        this.year = newValue;
    }
    ;
    addDriver(driver) {
        //@ts-ignore
        this.driver = driver;
    }
    ;
}
;
const car = new Car('Audi', 'Germany', 2017, 300, 120);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2023);
car.addDriver('Roma');
console.log(car);
