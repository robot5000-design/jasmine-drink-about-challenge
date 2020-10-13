describe("my fizzBuzz function", function() {
    describe("Numerical Input Tests", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
        it("should return string 'FizzBuzz'", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return string 'Fizz'", function() {
            expect(fizzBuzz(9)).toBe("Fizz");
        });
        it("should return string 'Buzz'", function() {
            expect(fizzBuzz(25)).toBe("Buzz");
        });
        it("should return the number entered", function() {
            expect(fizzBuzz(2)).toBe(2);
        });
        it("should return the argument entered", function() {
            expect(fizzBuzz("aNumber")).toBe("aNumber");
        });
    });
});


// describe("Game", function() {

//     beforeEach(function() {
//         let drink = new whatCanIDrink();
//     });

//     describe("numeric value tests", function() {
//         it("should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function() {
//             expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
//         });
//         it("should return 'Drink Toddy'", function() {
//             expect(whatCanIDrink(13)).toBe("Drink Toddy");
//         });
//         it("should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function() {
//             expect(whatCanIDrink(130)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
//         });
//     })
// })