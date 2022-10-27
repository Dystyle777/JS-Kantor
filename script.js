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

// function isEmpty(obj) {
//     for ( let prop in obj) {
//         // если тело цикла начнет выполняться - значит в объекте есть свойства
//         return false;
//     }
//     return true;
// }

// let shedule = {
//     name: 'Max',
//     'get up': '8:30',
//     age: 30,
// }

// // если объект:
// //              пуст - true
// //              заполнен - false
// console.log( isEmpty( shedule ));

// #3 Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum .
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     }
// Должно получиться 390 .
// Если объект salaries пуст, то результат должен быть 0 .

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;

// for (let key in salaries) {
//     sum += salaries[key];
// } 
// alert(sum); // 390

// #4 Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства
// объекта obj на 2.
//     Например:

// // до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// multiplyNumeric(menu);
// // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };
//     Обратите внимание, что multiplyNumeric не нужно ничего возвращать.Следует
// напрямую изменять объект.
//     P.S.Используйте typeof для проверки, что значение свойства числовое.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
};

console.log(menu); // до применения ф-ии
multiplyNumeric(menu);

console.log(menu); // после применения ф-ии
