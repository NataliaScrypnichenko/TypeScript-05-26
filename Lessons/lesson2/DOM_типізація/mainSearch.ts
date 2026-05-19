//версія tsconfig-(tsc -v) 5.9.2
//якщо при пошуку елемента нам дає нал або повертає елемент то робимо перевірку(as HTMLInputElement=тобто вказує що воно повино бути як htmlElement)
// щоб перейти в опис елемента то потрібно getElementById натиснути Ctrl+B (id.dom.d.ts)
const formById = document.getElementById('formId') as HTMLInputElement | null;
// formById?.alt// через крапку це ми можемо бачити все що притаманне до форми
//2
// if (formById instanceof HTMLFormElement) {
//     console.log(formById.action.toString());//дає можливість побачити що там записано
// }
// що робити з налом null
//
if (formById) {
    //@ts-ignore
    console.log(formById.action.toString())
}
