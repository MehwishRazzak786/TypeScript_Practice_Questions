//## Basic Arrow Functions Question:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Define a Arrow function called `greet` that takes a parameter `name` and returns a greeting message including the provided `name`. Then, call the `greet` Arrow function with the argument "John" and log the result to the console.
var greet = function (name) {
    return " \"Hello, ".concat(name, "\"");
};
var greetMessage = greet("Adeeba");
console.log(greetMessage);
//## Arrow Function Return Value Question:
//Write a JavaScript Arrow function named `calculateArea` that takes two parameters: `length` and `width`, representing the length and width of a rectangle respectively. The Arrow function should calculate the area of the rectangle and return the result. 
//Provide an example of calling this Arrow function with values `5` for length and `3` for width, and then print the result.
var calculateArea = function (length, width) {
    return length * width;
};
var result = calculateArea(5, 3);
console.log("The Area of rectangle is: ", result);
//## Default Parameter Arrow Function Question:
//Create a JavaScript Arrow function named `greet` that accepts two parameters: `name` and `greeting`. The Arrow function should return a greeting message using the provided `name` and `greeting`. If no `greeting` is provided, it should default to `"Hello"`. 
//For example:
//- When `greet("John", "Good morning")` is called, it should return `"Good morning, John!"`.
//- When `greet("Jane")` is called, it should return `"Hello, Jane!"`.
var greet1 = function (name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, "! ").concat(name, "...");
};
console.log(greet1('Adeeba', 'Good Morning'));
console.log(greet1('Jane'));
//## Rest Parameter in Arrow Function Question:
//Explain the concept of a rest parameter in typescript. write a typeScript Arrow function named `friend` that accepts any name of parameters and returns all name in array.
//For example:
//- If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
var friend = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names;
};
console.log(friend('ali', 'shahid', 'mariya', 'taha', 'ahmed'));
//## Spread Operator in Arrow Function:
//Explain the concept of a spread operator in typescript. write a typeScript Arrow function named `friend` that accepts any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. make sure your orignal array should not be change.
//For example:
//- If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
var friend1 = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    // Return the original names array
    return names;
};
// Example usage:
var originalNames = friend1('taha', 'Ahmed', 'Ali', 'shahid');
console.log("Original Names: ", originalNames);
// To demonstrate that the original array is unchanged, we can create a modified copy
var modifiedNames = __spreadArray([], originalNames, true);
modifiedNames.pop();
console.log("Modified Names: ", modifiedNames);
