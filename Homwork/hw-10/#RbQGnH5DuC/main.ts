///В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт

//   сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName,objToAdd) {
// // це ключ LocalStorage і дістаємо його
//         localStorage.setItem(arrayName);
//     //робимо перевірку чи існує там масив якщо ні то видаємо помилку
//     if (!localStorage.getItem(arrayName)) {
//         throw new Error('there is no array')
//     }
//     //перетворюємо в масив
//     const arrayParse = JSON.parse(localStorage.getItem(arrayName));
// //робимо перевірку чи це об'єкт а потім +
//      if ( typeof objToAdde === "object" ) {
//          arrayParse.push(objToAdd);
//      }
// //знову arrayParse перетворюємо JSON
//     const jsoArrayParse = JSON.stringify(arrayParse);
//      //записуємо в localStorage
//     localStorage.setItem(arrayName, jsoArrayParse);
//
// }



function addToLocalStorage<T>( // створюємо функцію з дженеріком T
                                // T — це тип даних, який буде переданий пізніше

    arrayName: string,         // назва ключа localStorage наприклад 'users'
    objToAdd: T                // об'єкт який треба додати в масив тип цього об'єкта = T

): void {                      // void означає що функція нічого не повертає

    const item:string | null = localStorage.getItem(arrayName);// дістаємо дані з localStorage, item буде string або null
    if (!item) {
        // якщо такого ключа немає викидаємо помилку
        throw new Error('there is no array');
    }

    const arrayParse: T[] = JSON.parse(item);// JSON.parse перетворює string у масив, T[] означає масив об'єктів типу T

    arrayParse.push(objToAdd);// додаємо новий об'єкт у масив

    localStorage.setItem(
        arrayName,
        JSON.stringify(arrayParse)
    );
    // JSON.stringify перетворює масив назад у string і записуємо оновлений масив назад у localStorage
}
