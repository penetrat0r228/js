// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculation (a, b){
    let area = a * b;
     return area;
 }
 let sideA = 5;
 let sideB = 10;

 let result = calculation(sideA, sideB);
 document.write(result)


 // - створити функцію яка обчислює та повертає площу кола з радіусом r
document.write(' ')
function calculation1(r){
     let area = 3.14 * r * r;
     return area;
}
let r = 44;
let result1 = calculation1(r);
 document.write(result1);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
document.write(' ')

function calculation2(h, r){
    let side_area = 2 * 3.14 * r * h;
    let base = 3.14 * r * r;
    let general = side_area + 2 * base;
    return general;
}
let radius = 3;
let height = 8;
let result2 = calculation2(radius, height);
document.write(result2);


//- створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'Ivan', username: 'ivanbest', password: 123123},
    {name: 'Vasya', username: 'vasyaboss', password: 111111},
    {name: 'Kostya', username: 'kosto4ka', password: 222222},
    {name: 'Petya', username: 'petro228', password: 228228},
    {name: 'Max', username: 'maxcool', password: 321321},
    {name: 'Iryna', username: 'ira1337', password: 101010},
    {name: 'Dima', username: 'dimas', password: 334433},
    {name: 'Anya', username: 'AnyaTop', password: 443344},
    {name: 'Olga', username: 'Olyanice', password: 123123},
    {name: 'Roman', username: 'romaiscool', password: 123456}
]

function usersArray(array){
    for (const item of array) {
        console.log(item);
    }
}
usersArray(users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(){
    console.log(arguments);
}
paragraph('<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listFn (text = 'hello text'){
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
}
listFn()


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


function list (text = 'text', count = 3, type = 'li'){
    for (let i = 0; i <count; i++) {
        document.write(`<ul><${type}>${text}</${type}></ul>`)
    }
}
list()

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function createList (array){
//     let ulElement = "ul";
//     for (let i = 0; i < array.length; i++) {
//
//     }
// }


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function objects(name, age, id){
    document.write(`
    <div>
    <h2>
    ім'я - ${name},
    вік - ${age},
    айді - ${id},
    </h2>
    </div>
    `)
}
let users1 = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5}
]
for (const user of users1) {
    objects(user.name, user.age, user.id)
}

//- створити функцію яка повертає найменьше число з масиву
function minFn (){
    let min = arguments[0]
    for (const item of arguments) {
        if (item < min) {
            min = item;
        }
    }
    return(min)
}
let res = minFn(1,4,5,318,0.4,41);
console.log(res)

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let i = 0
    for (const number of arr) {
        i = i+number
    }
    return i
}
let res1 = sum([1, 2, 10]);
document.write(res1);

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){
    const item1 = arr[index1];
    const item2 = arr[index2];

    arr[index2] = item1;
    arr[index1] = item2;

    return arr;
}

const swapResponse = swap([11,22,33,44],0,1);
console.log(swapResponse);

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let response = '';
    for (const currencyValue of currencyValues) {
        console.log(currencyValue)
        if (currencyValue.currency === exchangeCurrency) {
            response = sumUAH / currencyValue.value;
        }
    }
    return response;
}
const exchangeResponse = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')
console.log(exchangeResponse);