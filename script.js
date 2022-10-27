"use strict"
// -=-=-=-=-=-- создание оюъекта и обращение к элементам объекта
// let obj = {};

// let obj2 = new Object();

// let user = {
//     name: 'John',
//     age: 30,
//     height: '167cm',
//     name_param: "игроман" //имя может содержать 2 слова - нужно заключить в кавычки
// }

// let name_param = "like game"

// console.log(user); // show object
// console.log(user.name); // show element object's
// console.log(user.height); 
// console.log(user.age);

// user.isAdmin = true; // added element
// delete user.age;

// console.log(user);
// console.log(user[name_param]);

// let timeVar = "time var";
// user[timeVar] = true;

// alert(user[timeVar]);

// -=-=-=-=-=-=- применение объектов в функциях

// function makeUser(name, age) {
//     return {
//         name,
//         age
//     }
// }

// let user = makeUser('Max', 25);
// alert (user.age);
// alert (user.name);
// console.log(user);

// =-=-=-=-=-=-=-= особенности объектов
// let obj = {
//     0: "Тест" // то же самое что и "0": "Тест"
// };
// обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку "0")
// alert(obj["0"]); // Тест
// alert(obj[0]); // Тест (то же свойство)

//                         2nd variant
// let user = {};
// alert( user.noSuchProperty === undefined ); // true означает "свойства нет"
// console.log(user);

// if (user.noSuchProperty == undefined) {
//     console.log('hi');
// }
// else {
//     console.log('by');
// }

// =-=-=-=-=-=-=-= оператор in
// let user = {name:'Max', age:30,}

// alert ('name' in user);
// alert ('asdadad' in user);

// -=-=-=-=- Цикл «for…in»
// let obj = {
//     name: 'Max',
//     age: 30,
//     'is admin': true,
// }

// for (let prop in obj) {
//     console.log( prop );
// }

// for (let prop in obj) {
//     console.log( obj[prop] );
// }

// упорядочивание свойств объектов
// alert( String(Math.trunc(Number("++49")))); 
// alert( String(Math.trunc(Number("1ю2")))); 
// alert( String(Math.trunc(Number("1.2")))); 
// alert( String(Math.trunc(Number("1,3")))); 


// -==--=-=-=- практика к главе
// #1 Напишите код, выполнив задание из каждого пункта отдельной строкой:
// 1. Создайте пустой объект user .
// 2. Добавьте свойство name со значением John .
// 3. Добавьте свойство surname со значением Smith .
// 4. Измените значение свойства name на Pete .
// 5. Удалите свойство name из объекта.

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);

// #2 Проверка на пустоту
// важность: 5
// Напишите функцию isEmpty( obj ) , которая возвращает true , если у объекта нет
// свойств, иначе false .
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8: 30"] = "get up";
// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for ( let prop in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}

let shedule = {
    name: 'Max',
    'get up': '8:30',
    age: 30,
}

// если объект:
//              пуст - true
//              заполнен - false
console.log( isEmpty( shedule ));
