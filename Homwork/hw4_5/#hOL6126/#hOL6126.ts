
  //#hOL6126
  //– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    let list=(text1:string,text2:string,text3:string):void =>{
        document.write(`<ul>`)
           document.write (`<li> ${text1} </li>
                            <li> ${text2} </li>
                            <li> ${text3} </li>`)
        document.write(`<ul>`)
    };
console.log(list ('book','phone','pen') );

