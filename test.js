"use strict"
// проверка возможных резултатов функции "pow"
describe("pow", function () {
    describe("возводит x в степень 2", function () {
        function makeTest(x) {
            let expected = x * x;
            it(`${x} в степени 2 будет ${expected}`, function () {
                assert.equal(pow(x, 2), expected);
            });
        }
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
            console.log(x);
        }
    });
    describe("возводит x в степень 3", function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
            console.log(x);
        }
    });
});