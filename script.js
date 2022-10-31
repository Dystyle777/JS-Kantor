"use strict"
// -=-=-=- копирование объекта
// let user = {name:'Max'};
// let person = user;
// person.name = 'Jax';

// console.log('Массив user ' + user.name);
// console.log('Массив person ' + person.name);

// -=-=-=- клонирование объекта вручную
// let user = {
//     name:'Max',
//     age: 18,
//     'is admin': true,
// };
// let cloneObj = {}
// console.log(user);
// console.log(cloneObj);

// for (let key in user) {
//     cloneObj[key] = user[key];
// }
// cloneObj['is admin'] = false;
// console.log(user);
// console.log(cloneObj);

// -=-=-=- клонирование объекта с помощью функции
// let user = {
//         name:'Max',
//         age: 18,
//         'is admin': true,
//     };

// let user2 = {
//     skill: 'js',
//     hardSkill: 'responsibility',
//     name: 'Jax',
// };  

// let  person = {};
// Object.assign (person,user,user2);

// console.log(person);

// -=-=-=- клонирование объекта Obj ect. assign для замены for. . in 
// let user = {
//     name: 'Max',
//     age: 18,
//     'is admin': true,
// };

// let clone = Object.assign({},user);
// console.log(clone);

// Вложенное клонирование
// let user = {
//     name: 'Max',
//     size: {
//         weight: 80,
//         height: 100,
//     },
//     'is admin': true,
// }
// console.log(user);
// user.size.height = 190; // в этом случае мы работаем по ссылке к объекту
// user.name = 'jax'
// console.log(user);

// Глубокое клонирование 
// нужно подключение сторонней библиотеки https://lodash.com/ 
// https://lodash.com/docs/4.17.15#cloneDeep _.cloneDeep(value)
// подключение для броузера <script src="/lodash.js"></script>
