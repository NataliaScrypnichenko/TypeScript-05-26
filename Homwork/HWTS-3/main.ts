// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
//     Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь


async function foobarObj<T>(url: string): Promise<T> {
    //роблю запит на сервер
    const response = await fetch(url);
    //тут перетворюється відповідь  у json
    const data = await response.json();
    // повертаю результат
    return data;
}


// перевіряємо

type UserType3={
    id: number,
    name: string,
    email: string,
}

foobarObj<UserType3>( 'https://jsonplaceholder.typicode.com/users/1')
    .then(user => {
        console.log(user);
        console.log(user.name);
    })
