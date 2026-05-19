"use strict";
class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    ;
    drive() {
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
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    ;
    changeYear(newValue) {
        this.year = newValue;
    }
    ;
    addDriver(driver) {
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
car.addDriver({ name: 'bjhhiu' });
console.log(car);
