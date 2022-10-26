// "use strict"

let obj = {};
console.log('Объект obj ' + obj);

let obj2 = new Object();
console.log('Объект obj2 ' + obj2);

let user = {
    name: 'John',
    age: 30,
    height: '167cm',
    "like video games": true //имя может содержать 2 слова - нужно заключить в кавычки
}

console.log(user); // show object
console.log(user.name); // show element object's
console.log(user.height); 
console.log(user.age);

user.isAdmin = true; // added element
delete user.age;
console.log(user);

