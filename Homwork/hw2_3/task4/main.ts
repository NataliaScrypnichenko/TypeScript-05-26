// За допомогою циклу for і document.write() вивести 10 блоків div c
// довільним текстом і індексом всередині

let i: number = 0;
for (let i = 0; i < 10; i++) {
    document.write(`<div>lorem ${[i]}</div>`);

};
