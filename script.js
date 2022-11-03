"use strict"
// let user = null;
// console.log( user?.address ); // undefined
// console.log( user?.address.street ); // undefined

// -=-=-=-=
// let user2 = null;
// let x = 0;
// user2?.sayHi(x++); // нет user, поэтому до x++ вычисление не дойдет
// console.log(x); // 0, значение не было увеличено на единицу

//-=-=-=-=-=-=-
// let user1 = {
//     admin() {
//         console.log("Я администратор");
//     }
// };

// let user2 = {};

// user1.admin?.(); // Я администратор
// user2.admin?.();

//-=-=-=-=-=-=-
// let user1 = {
//     firstName: "Иван"
// };
// let user2 = null; // Представим, что пользователь не авторизован
// let key = "firstName";
// alert(user1?.[key]); // Иван
// alert(user2?.[key]); // undefined
// alert(user1?.[key]?.something?.not?.existing); // undefined

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Синтаксис опциональной цепочки ?. имеет три формы:

// 1. obj ?. prop – возвращает obj . prop , если существует obj , и undefined в противном случае.

// 2. obj ?. [prop] – возвращает obj [prop] , если существует obj , и undefined в противном случае.

// 3. obj . method?. ( ) – вызывает obj . method( ) , если существует obj . method , в противном случае возвращает undefined .