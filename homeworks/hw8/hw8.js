// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    console.log(this)
}
let userArr = [
new User(6, 'ivan', 'barbos', 'ivan228@gmail.com', '0684915115'),
new User(2, 'ivan', 'barbos', 'ivan228@gmail.com', '0684915115'),
new User(5, 'ivan', 'barbos', 'ivan228@gmail.com', '0684915115'),
new User(3, 'ivan', 'barbos', 'ivan228@gmail.com', '0684915115'),
new User(5, 'ivan', 'barbos', 'ivan228@gmail.com', '0684915115'),
new User(1, 'ivan', 'barbos', 'ivan228@gmail.com', '0684915115'),
new User(8, 'ivan', 'barbos', 'ivan228@gmail.com', '0684915115'),
new User(9, 'ivan', 'barbos', 'ivan228@gmail.com', '0684915115'),
new User(10, 'ivan', 'barbos', 'ivan228@gmail.com', '0684915115'),
new User(4, 'ivan', 'barbos', 'ivan228@gmail.com', '0684915115')
];
console.log(userArr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


let filteredUsers = userArr.filter(function (user){
    return user.id % 2 === 0;
});
console.log(filteredUsers);


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = userArr.sort(function (a, b){
    return a.id - b.id;
});
console.log(sortedUsers);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.order = order;
        console.log(this);
    }
}

let newArray = [
new Client(365, 'Alive', 'Jonson', 'alice.johnson@example.com', '1234567890', ['ProductA']),
new Client(300, 'Bob', 'Smith', 'bob.smith@example.com', '9876543210', ['ProductB', 'ProductD', 'ProductC']),
new Client(5, 'Charlie', 'Brown', 'charlie.brown@example.com', '5556667777', ['ProductA', 'ProductC']),
new Client(10, 'David', 'Miller', 'david.miller@example.com', '1231231234', ['ProductA', 'ProductB', 'ProductC', 'ProductD']),
new Client(11, 'Eva', 'Davis', 'eva.davis@example.com', '9879879876', ['ProductA', 'ProductC', 'ProductF', 'ProductB', 'ProductD', 'ProductE']),
new Client(332, 'Frank', 'Taylor', 'frank.taylor@example.com', '1112223333', ['ProductA', 'ProductB', 'ProductC', 'ProductD', 'ProductE', 'ProductF', 'ProductG', 'ProductH']),
new Client(2, 'Grace', 'Wilson', 'grace.wilson@example.com', '4445556666', ['ProductA', 'ProductB', 'ProductC', 'ProductD', 'ProductE', 'ProductF', 'ProductG']),
new Client(22, 'Henry', 'Clark', 'henry.clark@example.com', '7778889999', ['ProductA', 'ProductB', 'ProductC', 'ProductD', 'ProductE']),
new Client(44, 'Ivy', 'Anderson', 'ivy.anderson@example.com', '9990001111', ['ProductA', 'ProductB', 'ProductC', 'ProductD', 'ProductE', 'ProductF', 'ProductG', 'ProductH', 'ProductI', 'ProductJ']),
new Client(66, 'Jack', 'Moore', 'jack.moore@example.com', '2223334444', ['ProductA', 'ProductC'])
];
console.log(newArray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

newArray.sort(function (a, b) {
    return a.order.length - b.order.length;
});
console.log(newArray);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, manufacturer, year, maxSpeed, engineVolume){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);

    };
    this.info = function (){
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна: ${this.engineVolume} л`);
        if (this.driver){
            console.log(`Водій: ${this.driver.name}. Вік: ${this.driver.age}`);
        }
    };

    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed += newSpeed;
        console.log(`Максмальна швидкість підвищена на ${newSpeed} км/год`);
    };

    this.changeYear = function (newValue){
        this.year = newValue;
        console.log(`Рік випуску змінено на ${newValue}`);
    };

    this.addDriver = function (name, age){
        this.driver = {
            name: name,
            age: age
        };
        console.log(`Водія ${name} додано до авто`);
    };
}

let addCar1 = new Car('C63s', 'Mercedes-Benz', 2014, 246, 6.2);
console.log(addCar1);
addCar1.drive();
addCar1.info();
addCar1.increaseMaxSpeed(50);
addCar1.drive();
addCar1.changeYear(2012);
addCar1.info();
addCar1.addDriver('Ivan', 19);
addCar1.info()


//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car2 {
    constructor(model, manufacturer, year, maxSpeed, engineVolume){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume
    }
    drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);

    };
    info = function (){
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна: ${this.engineVolume} л`);
        if (this.driver){
            console.log(`Водій: ${this.driver.name}. Вік: ${this.driver.age}`);
        }
    };
    increaseMaxSpeed = function (newSpeed){
        this.maxSpeed += newSpeed;
        console.log(`Максмальна швидкість підвищена на ${newSpeed} км/год`);
    };
    changeYear = function (newValue){
        this.year = newValue;
        console.log(`Рік випуску змінено на ${newValue}`);
    };
    addDriver = function (name, age){
        this.driver = {
            name: name,
            age: age
        };
        console.log(`Водія ${name} додано до авто`);
    };
}

let car1 = new Car2('Octavia', 'Skoda', 2008, 200, 1.9);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(20);
car1.info();
car1.changeYear(2010);
car1.info();
car1.addDriver('Kostya', 20)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella{
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
class Prince{
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let cinderellas =[
    new Cinderella('cinderella1', 18, 38),
    new Cinderella('cinderella2', 19, 37),
    new Cinderella('cinderella3', 20, 42),
    new Cinderella('cinderella4', 20, 40),
    new Cinderella('cinderella5', 21, 43),
    new Cinderella('cinderella6', 18, 36),
    new Cinderella('cinderella7', 19, 44),
    new Cinderella('cinderella8', 28, 39),
    new Cinderella('cinderella9', 27, 38),
    new Cinderella('cinderella10', 29, 41)
];

let princeIvan = new Prince('Ivan', 19, 38);


let foundCinderella = null;

for (let i = 0; i < cinderellas.length; i++){
    if (cinderellas[i].shoeSize === princeIvan.foundShoe){
        foundCinderella = cinderellas[i];
    }
}
console.log(`Попелюшка знайдена: `, foundCinderella);

let foundCinderella1 = cinderellas.find(cinderella => cinderella.shoeSize === princeIvan.foundShoe);
console.log(`Попелюшка знайдена: `, foundCinderella1);