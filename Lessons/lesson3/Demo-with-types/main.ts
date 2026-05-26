
type AnimalType={
    isALive: boolean,
    sound:()=>void
}

class Horse implements AnimalType {
    constructor(isALive: boolean) {
        this.isALive = isALive;
    }
    isALive: boolean; //це виглядає як робота з інтерфейсами, тайп інплементовувалися

    sound(): void {
    }

}
// що використовувати самі рішаємо
