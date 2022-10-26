"use strict"
// проверка возможных резултатов функции "pow"
describe("pow", function () {
    // раскомментировать для вывода сообщений
    //  before(() => alert('Тестирование началось – перед тестами'));
    // after(() => alert("Тестирование закончилось – после всех тестов"));
   
    describe("возводит x в степень 2", function () {
        function makeTest(x) {
            let expected = x * x;
            it(`${x} в степени 2 будет ${expected}`, function () {
                assert.equal(pow(x, 2), expected);
            });
        }
        for (let x = 1; x <= 2; x++) {
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
        for (let x = 1; x <= 2; x++) {
            makeTest(x);
            console.log(x);
        }
    });

    it("если n - отрицательное число, результат будет NaN", function() {
        assert.isNaN(pow(2, -1));
      });
    
      it("если n не число, результат будет NaN", function() {
        assert.isNaN(pow(2, 1.5));
      });
});