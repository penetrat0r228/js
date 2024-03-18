//- Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let items = ['Main','Products','About us','Contacts'];
let ul = document.getElementById('list');
items.forEach(function (item){
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
})