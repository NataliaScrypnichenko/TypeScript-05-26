"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
//   (в першу, другу, третю або четверту частину години).
let time = prompt('вести хвилини');
if (time == null) {
    let timeNumber = Number(time);
    if (timeNumber >= 0 && timeNumber < 15) {
        console.log("першa частина години");
    }
    else if (timeNumber >= 15 && timeNumber < 30) {
        console.log("другa частина години");
    }
    else if (timeNumber >= 30 && timeNumber < 45) {
        console.log("третя частина години");
    }
    else if (timeNumber >= 45 && timeNumber < 59) {
        console.log("четверта частина години");
    }
    else {
        console.log('закінчено');
    }
    ;
}
;
