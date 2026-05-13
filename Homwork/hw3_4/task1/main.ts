// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент
// всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function list(text:string,numbEr:number):void {
    for (let i = 1; i <= numbEr; i++) {
        if (typeof numbEr  === 'number') {
            document.write(`
            <ul>
                <li>${text}</li>
             </ul>
            
            `)
        };
    };
};
list('hello',10);
list('banana',30);
