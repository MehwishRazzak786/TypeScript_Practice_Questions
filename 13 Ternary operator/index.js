//# Task:
//- make typescript file.
//- write a ternary operator code.
// Define a variable with a number value
var num = 5;
// Use a ternary operator to check the value of the variable
var result = num > 0 ? "The number is positive."
    : num < 0 ? "The number is negative."
        : "The number is zero.";
console.log(result); // Output: The number is positive.
// Change the value of the variable to test different cases
num = -3;
result = num > 0 ? "The number is positive."
    : num < 0 ? "The number is negative."
        : "The number is zero.";
console.log(result); // Output: The number is negative.
// Another test case
num = 0;
result = num > 0 ? "The number is positive."
    : num < 0 ? "The number is negative."
        : "The number is zero.";
console.log(result); // Output: The number is zero.
