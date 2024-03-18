// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом


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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];



let courses2 = document.getElementById('courses2');

coursesArray.forEach(function (course){
    let courseBox = document.createElement('div');
    courseBox.classList.add('course');

    let title = document.createElement('div');
    title.classList.add('course-title');
    title.textContent = course.title;
    courseBox.appendChild(title);

    let duration = document.createElement('div');
    duration.classList.add('duration');
    courseBox.appendChild(duration);

    let durationMonth = document.createElement('div');
    durationMonth.classList.add('durationMonth');
    duration.appendChild(durationMonth);

    let month = document.createElement('p');
    month.textContent = course.monthDuration;
    durationMonth.appendChild(month);

    let durationHours = document.createElement('div');
    durationHours.classList.add('durationHours');
    duration.appendChild(durationHours);

    let hours = document.createElement('p');
    hours.textContent = course.hourDuration;
    durationHours.appendChild(hours);

    let modulesBox = document.createElement('div');
    modulesBox.classList.add('modulesBox');
    courseBox.appendChild(modulesBox);

    let modules = document.createElement('ul');
    modules.classList.add('modules');
    course.modules.forEach(function (module){
        let moduleItem = document.createElement('li');
        moduleItem.textContent = module;
        modules.appendChild(moduleItem);
    });
    modulesBox.appendChild(modules);

    courses2.appendChild(courseBox);
})