// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const nums=(num1, num2, num3)=>{
//     if (num1<num2 && num1<num3){
//         document.write(num1)
//     }
//     else if (num2<num1 && num2<num3){
//         document.write(num2)
//     }
//     else{
//         document.write(num3)
//     }
// }



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const nums=(num1, num2, num3)=>{
//     if (num1>num2 && num1>num3){
//         document.write(num1)
//     }
//     else if (num2>num1 && num2>num3){
//         document.write(num2)
//     }
//     else{
//         document.write(num3)
//     }
// }



// - створити функцію яка повертає найбільше число з масиву

// let maxarray=[1,2,3,4,5]
// const marray=(array)=> {
//     let max = 0
//     for (const arrayElement of array) {
//         if (arrayElement > max) {
//             max=arrayElement
//         }
//     }
//     return max
// }

// - створити функцію яка повертає найменьше число з масиву

// let array=[2,1,3,4]
// const minimun=(arr)=> {
//     let min = 0
//     for (const element of arr) {
//         if (element<min){
//             min=element
//         }
//     }
//     return min
// }
// document.write(`${minimun(array)}`)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr=[2,4,6]
// const midarr=(middleelemet)=> {
//     let sum = 0
//     for (const middleelemetElement of middleelemet) {
//        sum+=middleelemetElement
//     }
// return sum
// }

        
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr=[2,4,6]
// const midarr=(middleelemet)=>{
//     let sum=0
//     for (const middleelemetElement of middleelemet) {
//         sum+=middleelemetElement
//     }
//     return sum/middleelemet.length
// }

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const maxminnums=(...nums)=>{
//     let max=0;
//     let min=0;
//     for (const num of nums) {
//         if (num>max){
//             max=num
//         }
//         if(num<min){
//             min=num
//         }
//     }
//     return min
//     console.log(max)
// }
// - створити функцю яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// const randomnums=(nums)=>{
//     for ( let i=0; i<10; i++){
//         nums[i]= math.round(Math.random()*100)
//     }
//  return nums[i]
// }
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// const randomizer = (nums,limit) => {
//         let array = [];
// for ( let i = 0;i < nums; i++){
//     array.push(Math.round(Math.random()*limit))
// }
// return array
// }
// document.write(randomizer(10,100))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let array = [1, 2, 3, 4]
// const reverse = (arr) => {
//     let reversarr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         reversarr[ri] = arr[i];
//     }
//
//     return reversarr;
// }
// console.log(reverse(array));
