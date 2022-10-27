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
let obj = {
    name: 'Max',
    age: 30,
    'is admin': true,
}

for (let prop in obj) {
    console.log( prop );
}

for (let prop in obj) {
    console.log( obj[prop] );
}
