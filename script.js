"use strict"
//6_new
// function User(name,surname) {
//     this.name = name;
//     this.isAdmin = false;
//     this.surname = surname;
// }
// let user = new User("Vasya","Oblomov");
// console.log(user.name);
// console.log(user.isAdmin);
// console.log(user.surname);


// function User(name) {
//     this.name = name;
//     this.sayHi = function () {
//         console.log("Меня зовут: " + this.name);
//     };
// }
// let vasya = new User("Вася");
// vasya.sayHi(); // Меня зовут: Вася

// Задачи 
// №1 Две функции - один объект
// Возможно ли создать функции A и B в примере ниже, где объекты равны new A( ) == new B( ) ?

// function A() { . . . }
// function B() { . . . }
// let a = new A;
// let b = new B;
// alert( a == b ); // true

// // example
// let obj = {};

// function A() {
//     return obj;
// }

// function B() {
//     return obj;
// }

// let a = new A;
// let b = new B;
// console.log(a);
// console.log(b);
// alert(a == b); // true

// №2 Создание калькулятора при помощи конструктора
// Создайте функцию-конструктор Calculator , который создаёт объекты с тремя методами:
// read( ) запрашивает два значения при помощи prompt и сохраняет их значение в
// свойствах объекта.
// sum( ) возвращает сумму введённых свойств.
// mul( ) возвращает произведение введённых свойств.
// Например:
// let calculator = new Calculator();
// calculator. read();
// alert( "Sum=" + calculator. sum() );
// alert( "Mul=" + calculator. mul() );

// решение
// function Calculator() {
//     this.read = function () {
//         this.a = +prompt("a?", 0); 
//         this.b = +prompt("b?", 0);
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// };
// 
// let calculator = new Calculator();
// calculator.read();
// 
// alert( "Sum=" + calculator.sum() );
// alert("Mul=" + calculator.mul());

// №3 Создаём Accumulator
// Напишите функцию-конструктор Accumulator( startingValue) .
// Объект, который она создаёт, должен уметь следующее:
//  - Хранить «текущее значение» в свойстве value . Начальное значение устанавливается в аргументе конструктора startingValue .
//  - Метод read( ) использует prompt для получения числа и прибавляет его к свойству value .

// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь 
// при вызовах метода read( ), с учётом начального значения startingValue .
// // Ниже вы можете посмотреть работу кода:
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator. read(); // прибавит ввод prompt к текущему значению
// accumulator. read(); // прибавит ввод prompt к текущему значению
// alert(accumulator. value); // выведет сумму этих значений

// решение
function Accumulator(startValue) {
    this.value = startValue;

    this.read = function() {
                this.value += +prompt("Сколько нужно добавить к текущему значению?", 0); 
            };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log("Итоговая сумма", accumulator.value);
