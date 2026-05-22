"use strict";
let coursesAndDurationArray1 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (const courses of coursesAndDurationArray1) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerHTML = courses.title;
    let p = document.createElement('p');
    p.classList.add('description');
    //@ts-ignore
    p.innerHTML = courses.monthDuration;
    div.append(h1, p);
    document.body.appendChild(div);
}
;
