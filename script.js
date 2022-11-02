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

// let user = {
//         firstName: "Илья",
//     sayHi() {
//         let arrow = () => alert(this.lastName);
//         arrow();
//     },
//     lastName: "Lapin"
// };
// user.sayHi(); // Илья


// практика 
// #1 Каким будет результат выполнения этого кода?
// let user = {
//     name: "Джон",
//     go: function () { alert(this.name) }
// };
// (user.go)()
// выведет ошибку из-за отсутствия ; после } переде (

// #2 Объясните значение "this"
// Впредставленном ниже коде мы намерены вызвать obj . go( ) метод 4 раза подряд.
// Но вызовы ( 1) и ( 2) работают иначе, чем ( 3) и ( 4) . Почему?
// let obj, method;
// obj = {
//     go: function() { alert(this); }
// };
// obj.go(); // (1) [obj ect Obj ect] 
// (obj.go)(); // (2) [obj ect Obj ect]
// (method = obj.go)(); // (3) undefined --- Здесь f( ) выполняется как функция, без передачи значения 
// (obj.go || true)(); // (4) undefined    -----Тут похожая ситуация на случай ( 3) – идёт потеря значения this .
//                                             // Чтобы объяснить поведение в примерах ( 3) и ( 4) , нам нужно помнить, что
//                                             // доступ к свойству (через точку или квадратные скобки) возвращает специальное
//                                             // значение ссылочного типа (Reference Type).
//                                             // За исключением вызова метода, любая другая операция (подобно операции
//                                             // присваивания = или сравнения через логические операторы, например | | )
//                                             // превращает это значение в обычное, которое не несёт информации, позволяющей
//                                             // установить this .

// #3 Использование "this" в литерале объекта
// есь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref ? Почему?
// function makeUser() {
//     return {
//         name: "Джон",
//         ref: this
//     };
// };

// let user = makeUser();
// console.log(makeUser());
// alert(  user.ref.name ) // Каким будет результат? --- Cannot read properties of undefined

// #4 Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:
//  - read( ) (читать) запрашивает два значения и сохраняет их как свойства объекта.
//  - sum( ) (суммировать) возвращает сумму сохранённых значений.
//  - mul( ) (умножить) перемножает сохранённые значения и возвращает результат

// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//     read() {
//         this.a = prompt('a?', 0);
//         this.b = prompt('b?', 0);
//     },
// };
// calculator.read();
// console.log('a = ' + calculator.a);
// console.log('b = ' + calculator.b);
// console.log('Sum = ' + calculator.sum());
// console.log('Mul = ' + calculator.mul());


// #5  Цепь вызовов
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         console.log(this.step);
//     }
// };
// // Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем
// // выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// Измените код методов up , down и showStep таким образом, чтобы их вызов можно
// было сделать по цепочке, например так:
// ladder.up().up().down().showStep(); // 1
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        console.log(this.step);
        return this;
    }
};
ladder
    .up()
    .up()
    .down()
    .showStep();

