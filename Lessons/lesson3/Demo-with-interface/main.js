"use strict";
// можно декілька вказувати interface - це імплеметація тобто це впровадження декількох контрактів тобто BirnClass зобов'язаний відповідати моделлю даних IAnimal, X
class BirnClass {
    constructor(isAlive, wings, id) {
        this._isAlive = isAlive;
        this._wings = wings;
        this._id = id;
    }
    get wings() {
        return this._wings;
    }
    set wings(value) {
        this._wings = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get isAlive() {
        return this._isAlive;
    }
    set isAlive(value) {
        this._isAlive = value;
    }
    sound() {
    }
}
// interface можуть між собою екстендитися з класами вони імплементуютью interface - це завжди контракт який визначає яким чином пений клас повинний виглядати в обов'язковому порядку, тобто клос може мати свої поля якщо так потрібно
