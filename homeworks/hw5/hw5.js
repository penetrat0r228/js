// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc = (a, b) => a * b
let result = calc(5, 10);
console.log(result)


//- створити функцію яка обчислює та повертає площу кола з радіусом r

let calculation = (r) => 3.14 * r * r
let result1 = calculation(44)
console.log(result1)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let calculation2 = (h, r) => 2 * 3.14 * r * r + 2 * 3.14 * r * h
let result2 = calculation2(3, 8)
console.log(result2)


// - створити функцію яка приймає масив та виводить кожен його елемент

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
const usersArray = (users) => {
    for (const user of users) {
        console.log(user);
    }
}
usersArray(users)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (...arguments) => {
    console.log(arguments);
}
paragraph('<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list = (text = 'text') => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li><li>${text}</li><li>${text}</li>`);
    document.write(`</ul>`);
}
list()



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let listFn = (text, count, type) =>{
    document.write(`<ul>`);
    for (let i = 0; i <count; i++) {
        document.write(`<${type}>${text}</${type}>`);
    }
    document.write(`</ul>`);
}
listFn('text1', 3, 'li')


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
let createList = (elements) => {
    document.write(`<ul>`);
    for (const element of elements) {
        document.write(`<li>` +element + `</li>`);
    }
    document.write(`</ul>`);
}
const elements = [1, false, true, 'text', 22];
createList(elements)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let objects = (name, age, id) => {
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
let usersFn = (users1) => {
    for (const user of users1) {
        objects(user.name, user.age, user.id)
    }
}
usersFn(users1)




//- створити функцію яка повертає найменьше число з масиву

let minFn = (...numbers) =>{
    let min = numbers[0]
    for (const item of numbers) {
        if (item < min) {
            min = item;
        }
    }
    return min
}
let res = minFn(1,4,5,318,0.4,41);
console.log(res)



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) =>{
    let i = 0
    for (const number of arr) {
        i = i+number
    }
    return i
}
let res1 = sum([1, 2, 10]);
console.log(res1);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах.Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) =>{
    const item1 = arr[index1];
    const item2 = arr[index2];

    arr[index2] = item1;
    arr[index1] = item2;

    return arr;
}

const swapResponse = swap([11,22,33,44],0,1);
console.log(swapResponse);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let response = '';
    for (const currencyValue of currencyValues) {
        console.log(currencyValue)
        if (currencyValue.currency === exchangeCurrency) {
            response = sumUAH / currencyValue.value;
        }
    }
    return response;
}
const exchangeResponse = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(exchangeResponse);



