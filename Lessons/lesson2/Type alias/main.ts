// type це все просто псевдомінімізатор,він дозволяє робити псевдоніми тобто можемо пакувати типи чи значення в окремі свої власні псевдоніми
type MyString= string; // тут зробили псевдонім
let s:MyString ='okten is cool';

type PrimitivesTypes= string | number | boolean; // давати тиипи
let X: PrimitivesTypes = false;// можна покласти, що хочеш- це примітивні типи

type Falsy=  0 | null | undefined | false | '';// можемо давати цілісні значення( NAN- сприймає як тип  )

let f: Falsy= null;
