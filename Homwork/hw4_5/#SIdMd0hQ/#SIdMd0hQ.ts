//#SIdMd0hQ
  //– створити функцію, яка приймає масив та виводить кожен його елемент
  let printArray=(array:any[]):void=>{
    for(let i=0;i<array.length;i++){
      console.log(array[i]);
    }
  };
 let arr:any[] = [123, 234,345, -123, 0, true, 'asdfgh'];
  console.log(printArray(arr));
