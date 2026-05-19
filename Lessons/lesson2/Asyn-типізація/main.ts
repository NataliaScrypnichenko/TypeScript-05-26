//памятати що коли працюємо з асинхроностью то працюємо з об'єктами типу промісами,
// відповідно завжди будемо повертати промісти.
interface IUser {
    id: number;
    name: string;
}


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users:IUser[]) => {
        console.log(user[0].age);
    })

async function foobar ():Promise<IUser[]> {
   const users:IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
  return user
}
