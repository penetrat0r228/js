// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


let courses1 = document.getElementById('courses1');

coursesAndDurationArray1.forEach(function (course){
    let courseBox = document.createElement('div');
    courseBox.classList.add('item');

    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = course.title;

    let description = document.createElement('p');
    description.classList.add('description');
    description.textContent = `Тривалість: ${course.monthDuration} місяців`;

    courseBox.appendChild(heading);
    courseBox.appendChild(description);

    courses1.appendChild(courseBox);
});