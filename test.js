"use strict"
describe("pow", function () {
   function makeTest(x) {
        let expected = x * x * x;
        it(`${x} встепени 3 будет ${expected}`, function(){
            assert.equal(pow(x,3), expected);
        });
   }
   for (let x = 1; x<= 5; x++) {
    makeTest(x);
    console.log(x);
   }
});