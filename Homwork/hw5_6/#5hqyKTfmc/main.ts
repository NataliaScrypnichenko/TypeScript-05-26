//– створити функцію sortNums(array,direction), яка приймає масив чисел, та
// сортує його від більшого до меншого,
// /////або навпаки  – залежно від значення аргументу////// direction./////
//
// let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]

let nums:number[] = [11,21,3];

function sortNums(array:number[],direction:string){
     if (direction ==='ascending'){
         array.sort((a:number,b:number)=> {
             return a - b;
         })
     };
     if (direction==='descending'){
         array.sort((a:number,b:number)=> {
             return b - a;
         })
     };
    return array;
};
 let sortNumsAscending:number[]=sortNums(nums, 'ascending')
console.log(sortNumsAscending);

 let sortNumsDescending:number[]=sortNums(nums, 'descending');
 console.log(sortNumsDescending);

 function sortNums2(arrayOfNums:number[],direction:string){
     const sort:number[] = arrayOfNums.sort((a,b)=> a-b);
     if (direction==='ascending'){
         return sort;
     }
     if (direction==='descending'){
        return sort.reverse();
     }
 };// це краще
console.log(sortNums2(nums, 'ascending'));
console.log(sortNums2(nums, 'descending'));
