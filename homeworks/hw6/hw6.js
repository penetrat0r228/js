// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// 'hello world'
let str1 = 'hello world';
console.log(str1.length);


// 'lorem ipsum'
let str2 = 'lorem ipsum';
console.log(str2.length);


// 'javascript is cool'
let str3 = 'javascript is cool';
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'


//  'hello world'
console.log(str1.toUpperCase());


// 'lorem ipsum'
console.log(str2.toUpperCase());


// 'javascript is cool'
console.log(str3.toUpperCase());


//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


//'HELLO WORLD'
let str4 = 'HELLO WORLD';
console.log(str4.toLowerCase());


//'LOREM IPSUM'
let str5 = 'LOREM IPSUM';
console.log(str5.toLowerCase());


//'JAVASCRIPT IS COOL'
let str6 = 'JAVASCRIPT IS COOL';
console.log(str6.toLowerCase());


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


let str7 = ' dirty string   ';
console.log(str7.trim());


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let str8 = 'Ревуть воли як ясла повні';
console.log(str8.split(' '));


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


let nums = [10,8,-7,55,987,-1011,0,1050,0];
let strs = nums.map(function (number){
    return number.toString();
})
console.log(strs)


function sortNums(arr, direction){
    if (direction === 'ascending'){
        arr.sort(function (a , b){
            return a - b;
        });
    }else if (direction === 'descending'){
        arr.sort(function (a , b){
            return b - a;
        });
    }
    return arr;
}

console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))


//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort(function (a,b){
    return b.monthDuration - a.monthDuration;
}));

console.log(coursesAndDurationArray.filter(function (value){
    return value.monthDuration > 5;
}));

console.log(coursesAndDurationArray.map((value, index) => {
    return {id:index + 1, title:value.title, monthDuration:value.monthDuration};
}));



// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let cards = [];

for (let suit of suits) {
    for (let value of values) {
        let color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';
        cards.push({ cardSuit: suit, value: value, color: color });
    }
}

let spadeAce = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

let sixes = cards.filter(card => card.value === '6');
console.log(sixes);

let redCards = cards.filter(card => card.color === 'red');
console.log(redCards);

let diamonds = cards.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);

let highValueClubs = cards.filter(card => card.cardSuit === 'clubs' && (card.value === '9' || card.value === '10' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value === 'ace'));
console.log(highValueClubs);


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let sortedCards = deck.reduce((acc, card) => {
    if (card.cardSuit === "spade"){
        acc.spade.push(card);
    }else if (card.cardSuit === "diamond"){
        acc.diamonds.push(card);
    }else if (card.cardSuit === "heart"){
        acc.hearts.push(card);
    }else if (card.cardSuit === "clubs"){
        acc.clubs.push(card);
    }
    return acc;
},
    {spade: [], diamonds: [], hearts: [], clubs: []});

console.log(sortedCards);


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let sortedCards = deck.reduce((acc, card) => {
    if (card.cardSuit === "spade"){
        acc.spade.push(card);
    }else if (card.cardSuit === "diamond"){
        acc.diamonds.push(card);
    }else if (card.cardSuit === "heart"){
        acc.hearts.push(card);
    }else if (card.cardSuit === "clubs"){
        acc.clubs.push(card);
    }
    return acc;
},
    {spade: [], diamonds: [], hearts: [], clubs: []});

console.log(sortedCards);


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


let sassCourse = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sassCourse);

let dockerCourse = coursesArray.filter(course => course.modules.includes('docker'));
console.log(dockerCourse);
