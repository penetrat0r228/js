
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(mas);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 =
    {title: 'title1', pageCount: 50, genre: 'genre1'}
console.log(book1);
let book2 =
    {title: 'title2', pageCount: 154, genre: 'genre2'}
console.log(book2);
let book3 =
    {title: 'title3', pageCount: 30, genre: 'genre3'}
console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let authors = [
    {name: 'vasya', age: 31},
    {name: 'olya', age: 28},
    {name: 'petya', age: 36},
]

let book4 =
    {title: 'title4', pageCount: 60, genre: 'genre4', authors}
console.log(book4);
let book5 =
    {title: 'title5', pageCount: 70, genre: 'genre5', authors}
console.log(book5);
let book6 =
    {title: 'title6', pageCount: 80, genre: 'genre6', authors}
console.log(book6)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувач
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
    {name: 'Roman', username: 'romaiscool', password: 123456},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);




// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x= 6
 if(x < 0 || x > 0){
     document.write('<h2>Вірно</h2>');
 }else {
     document.write('<h2>Невірно</h2>');
 }

let a = 1
if(a < 0 || a > 0){
    document.write('<h2>Вірно</h2>');
}else {
    document.write('<h2>Невірно</h2>');
}

let b = 0
if(b < 0 || b > 0){
    document.write('<h2>Вірно</h2>');
}else {
    document.write('<h2>Невірно</h2>');
}

let c = -3
if(c < 0 || c > 0){
    document.write('<h2>Вірно</h2>');
}else {
    document.write('<h2>Невірно</h2>');
}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time = 50;
if (time > 0 && time <= 15) {
    document.write('<h2>Перша частина</h2>')
}else if (time > 15 && time <=30){
    document.write('<h2>Друга частина</h2>')
}else if (time > 30 && time <=45){
    document.write('<h2>Третя частина</h2>')
}else if (time > 45 && time <=59){
    document.write('<h2>Четверта частина</h2>')
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 10;
if (day > 1 && day <=11){
    document.write('<h2>Перша декада</h2>')
}else if (day > 11 && day <=21){
    document.write('<h2>Друга декада</h2>')
}else if (day > 21 && day <=31){
    document.write('<h2>Третя декада</h2>')
}



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day1 = 2
switch (day1){
    case 1: document.write('<h2>Monday:</h2> <h3>Піти на бробіжку, відвідати лікаря, піти в університет</h3>')
        break;
    case 2: document.write('<h2>Tuesday:</h2> <h3>Піти на бробіжку, піти в університет</h3>')
        break;
    case 3: document.write('<h2>Wednesday:</h2> <h3>Піти в університет, відвідати зал, піти з друзями на пиво</h3>')
        break;
    case 4: document.write('<h2>Thursday</h2> <h3>Піти на заняття з футболу, відвідати лекцію по js</h3>')
        break;
    case 5: document.write('<h2>Friday</h2> <h3>Піти в університет, поїхати в село</h3>')
        break;
    case 6: document.write('<h2>Saturday</h2> <h3>Піти в гори, позбирати гриби</h3>')
        break;
    case 7: document.write('<h2>Sunday</h2> <h3>Повернутись в місто, підготуватись до понеділка</h3>')
        break
}




// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.
let z = 5;
let y = 3;

if (z > y){
    console.log(z)
}else if (z < y){
    console.log(y)
}else if (z === y){
    console.log('numbers are equal')
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let k = ' ';
 if (!!k===false){
     console.log('default');
 }




 //- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 if (coursesAndDurationArray[0].monthDuration > 5){
     console.log('Супер')
 }
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер')
}
