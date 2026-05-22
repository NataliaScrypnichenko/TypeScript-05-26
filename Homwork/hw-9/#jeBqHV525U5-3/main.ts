// #jeBqHV525U5
//
// – Є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.

type CoursesAndDurationArrayType={
    title: string,
    monthDuration: number,
}

let courSesAndDurationArray:CoursesAndDurationArrayType[] = [

    {title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4}

];

for (const courses of courSesAndDurationArray) {
    let div:HTMLDivElement = document.createElement('div');
    let p:HTMLDivElement = document.createElement('p');
    p.innerHTML = courses.title + ' - ' + courses.monthDuration;
    div.append(p);
    document.body.appendChild(div);
};
