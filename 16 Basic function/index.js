/*## Basic Functions Question:

Define a function called `greet` that takes a parameter `name` and returns a greeting message including the provided `name`. Then, call the `greet` function with the argument "John" and log the result to the console.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the greet function
/*function greet(name: string):string {
    return `Assalam o Alaikum! ${name}!.`

};
// Call the greet function with argument 'Adeeba' & log the result to the console
let greeting: string = greet('Adeeba');
console.log(greeting);*/ // output: Assalam o Alaikum! Adeeba!.
//## Function Return Value Question:
//Write a JavaScript function named `calculateArea` that takes two parameters: `length` and `width`, representing the length and width of a rectangle respectively. The function should calculate the area of the rectangle and return the result. 
//Provide an example of calling this function with values `5` for length and `3` for width, and then print the result.
// Define the calculateArea function
function calculateArea(length, width) {
    return length * width;
}
// Call the calculateArea function with values 5 for length and 3 for width
var result = calculateArea(5, 3);
// Print the result
console.log("The Area of Rectangle is: ", result);
//## Default Parameter Function Question:
//Create a JavaScript function named `greet` that accepts two parameters: `name` and `greeting`. The function should return a greeting message using the provided `name` and `greeting`. If no `greeting` is provided, it should default to `"Hello"`. 
//For example:
//- When `greet("John", "Good morning")` is called, it should return `"Good morning, John!"`.
//- When `greet("Jane")` is called, it should return `"Hello, Jane!"`.
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, "!, ").concat(name);
}
console.log(greet('John', 'Good morning'));
console.log(greet('Jane'));
//# Rest Parameter Question:
//Explain the concept of a rest parameter in typescript. write a typeScript function named `friend` that accepts any name of parameters and returns all name in array.
//For example:
//- If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
function friend() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names;
}
console.log(friend('Mehwish', 'Adeeba', 'Aisha', 'Aabis'));
//## Spread Operator:
//Explain the concept of a spread operator in typescript. write a typeScript function named `friend` that accepts any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. make sure your orignal array should not be change.
function friend1() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names;
}
var originalNames = friend1("Taha", 'Ahmad', 'Ali', 'Ayesha');
console.log("Original Names: ", originalNames);
//Copy the array using the spread operator
var copiedNames = __spreadArray([], originalNames, true);
// Remove the last name from the copied array
copiedNames.pop();
console.log("Copied Names: ", copiedNames);
