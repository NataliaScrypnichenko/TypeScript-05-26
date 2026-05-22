"use strict";
class User56 {
    constructor(name, age, status) {
        this._name = name;
        this._age = age;
        this._status = status;
    }
    greeting() {
        console.log('vdjhgd');
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
}
let user12 = new User56('nata', 24, false);
// доступитися не можливо коли  private? як можемо доступитися і вносити зміні то робимо гетери і сетери через Generate
console.log(user12.name); // дає get
user12.name = 'Roma'; // set
//тобто з'являються буфери де можна перевірити
// класи мід собою можуть екстендитися між собою
class User65 extends User56 {
    // id: number;
    constructor(name, age, status, _id) {
        super(name, age, status);
        this._id = _id;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
let user23 = new User65('sara', 76, false, 5);
console.log(user23.name); // дає get в клас User56
//взаємодія між class type interface=
