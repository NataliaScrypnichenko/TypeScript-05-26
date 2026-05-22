// #OPLI89c9G
//
// – Є масив:
//
//     [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const words:string[]= ['Main','Product','About us','Contacts'];

for (const word of words){
    // console.log(word);
    let ul:HTMLUListElement = document.createElement('ul');
    let li:HTMLElement = document.createElement('li');
    li.innerHTML=word;
    ul.append(li)
    document.body.appendChild(ul)
};
