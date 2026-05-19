"use strict";
//     #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day:string | null = prompt('day of the month')
// if(day !== null){
//     let dayMonth= Number(day)
// if (dayMonth >= 0 &&dayMonth <= 10) {
//     console.log('first ten-day period of the month')
// }else if (dayMonth > 10 && dayMonth <= 20){
//     console.log('second ten-day period of the month')
// } else if (dayMonth > 20 && dayMonth <= 31){
//     console.log('third ten-day period of the month')
// }
//
// }
let day = 11;
if (day >= 0 && day <= 10) {
    console.log('first ten-day period of the month');
}
else if (day > 10 && day <= 20) {
    console.log('second ten-day period of the month');
}
else if (day > 20 && day <= 31) {
    console.log('third ten-day period of the month');
}
