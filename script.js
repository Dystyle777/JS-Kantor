"use strict"
// первое использование
// let user = {
//     name: "Джон",
//     age: 30,
//     sayHi() {
//         console.log(this.name + " привет!");
//     }
// };

// user.sayHi();
// console.log(user);


// пример с нарушением связи
// let user = {
//     name: "Джон",
//     age: 30,
//     sayHi() {
//         // alert(user.name); // приведёт к ошибке
//         alert(this.name); // правильное написание
//     }
// };
// let admin = user;
// user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
// admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект

//«this» не является фиксированным
// let user = { name: "Джон" };
// let admin = { name: "Админ" };
// function sayHi() {
//     alert(this.name);
// }
// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// console.log(user);
// console.log(admin);

// // вызовы функции, приведённые ниже, имеют разное значение this
// // "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон (this == user)
// admin.f(); // Админ (this == admin)
// admin['f'] (); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)


//особенности использования this  при  режиме "use strict" и без
// function sayHi() {
//     alert(this);
// }
// sayHi(); // undefined
// console.log(this);


//Внутренняя реализация: Ссылочный тип
// let user = {
//     name: "Джон",
//     hi() { alert(this.name); },
//     bye() { alert("Пока"); }
// };
// user.hi(); // Джон (простой вызов метода работает хорошо)
// // теперь давайте попробуем вызывать user. hi или user. bye
// // в зависимости от имени пользователя user. name
// (user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!

// let user = {
//     name: "Джон",
//     hi() { alert(this.name); }
// };
// // разделим получение метода объекта и его вызов в разных строках
// let hi = user.hi;
// alert(hi);
//  hi(); // Ошибка, потому что значением this является undefined

// У стрелочных функций нет «this»

let user = {
    firstName: "Илья",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};
user.sayHi(); // Илья