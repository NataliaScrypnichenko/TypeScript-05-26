// #Kx1xgoKy8
//
// – Є масив
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу,
// та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.
interface ICoursesAndDurationArray{
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray1:ICoursesAndDurationArray[] = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

for (const courses of coursesAndDurationArray1) {
    let div:HTMLDivElement = document.createElement('div');
     div.classList.add('item');

     let h1:HTMLDivElement = document.createElement('h1');
     h1.classList.add('heading');
     h1.innerHTML = courses.title;

     let p:HTMLDivElement = document.createElement('p');
     p.classList.add('description');
     // p.innerHTML = String(courses.monthDuration);//зміни тут були використали клас.
    p.innerHTML =courses.monthDuration.toString();

        div.append(h1, p);

     document.body.appendChild(div);
};
