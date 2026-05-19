"use strict";
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users) => {
    console.log(user[0].age);
});
async function foobar() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return user;
}
