let sessionsList:string[]=JSON.parse(
    localStorage.getItem('sessionsList') as string)
//щоб дістати localStorage дані потрібно про ітерувати масив
for (const session of sessionsList) {
    let div:HTMLDivElement = document.createElement('div');

    let p:HTMLParagraphElement = document.createElement('p');
    p.innerHTML = session.toString();

    div.appendChild(p);
    document.body.appendChild(div);
};
