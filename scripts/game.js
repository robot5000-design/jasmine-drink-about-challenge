function fizzBuzz(num) {
    if ((num % 3 === 0) && (num % 5 === 0)) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
};




// function whatCanIDrink(age) {
//     if (age < 0) {
//         return "Sorry. I can’t tell what drink because that age is incorrect!";
//     } else if (age < 14) {
//         return "Drink Toddy";
//     } else if (age < 18) {
//         return "Drink Coke";
//     } else if (age < 21) {
//         return "Drink Beer";
//     } else if (age < 130) {
//         return "Drink Whisky";
//     } else {
//         return "Sorry. I can’t tell what drink because that age is incorrect!";
//     }
// }