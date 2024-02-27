// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let name =[
    '<div>Lorem ipsum dolor sit amet.1</div>',
    '<div>Lorem ipsum dolor sit amet.2</div>',
    '<div>Lorem ipsum dolor sit amet.3</div>',
    '<div>Lorem ipsum dolor sit amet.4</div>',
    '<div>Lorem ipsum dolor sit amet.5</div>',
    '<div>Lorem ipsum dolor sit amet.6</div>',
    '<div>Lorem ipsum dolor sit amet.7</div>',
    '<div>Lorem ipsum dolor sit amet.8</div>',
    '<div>Lorem ipsum dolor sit amet.9</div>',
    '<div>Lorem ipsum dolor sit amet.0</div>',
        ]
for (let string of name) {
    document.write(string)
}



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let name1 =[
    '<div>Lorem ipsum dolor sit amet.</div>',
    '<div>Lorem ipsum dolor sit amet.</div>',
    '<div>Lorem ipsum dolor sit amet.</div>',
    '<div>Lorem ipsum dolor sit amet.</div>',
    '<div>Lorem ipsum dolor sit amet.</div>',
    '<div>Lorem ipsum dolor sit amet.</div>',
    '<div>Lorem ipsum dolor sit amet.</div>',
    '<div>Lorem ipsum dolor sit amet.</div>',
    '<div>Lorem ipsum dolor sit amet.</div>',
    '<div>Lorem ipsum dolor sit amet.</div>',
]

for (let i = 0; i < name1.length; i++) {
    const nameElement = name1[i];

    document.write(i + nameElement)
}



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let name2 = [
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
]
let i = 0;
while (i < name2.length){
    document.write(name2[i]);
    i++;
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let name3 = [
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    '<h1>Lorem ipsum dolor sit.</h1>',
    ]
for (let i = 0; i < name3.length; i++) {
    const nameElement = name3[i];

    document.write(i + nameElement)
}


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>');
    for (let i = 0; i < listOfItems.length; i++){
        document.write('<li>' + listOfItems[i] + '</li>');
    }
    document.write('</ul>');


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i= 0; i < products.length; i++){
    const product = products[i];
    document.write(
        `<div class="product-card">
            <h3>${product.title} Price - ${product.price}</h3>
            <img src="${product.image}" alt="">
            </div>`

    )
}

// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let user of users){
    if (user.status === true){
        console.log(user)
    }
}
console.log(' ')
for (let user of users){
    if (user.status === false){
        console.log(user)
    }
}
console.log(' ')
for (let user of users){
    if (user.age > 30){
        console.log(user)
    }
}