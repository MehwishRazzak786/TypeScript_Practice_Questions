//## Basic Arrow Functions Question:

//Define a Arrow function called `greet` that takes a parameter `name` and returns a greeting message including the provided `name`. Then, call the `greet` Arrow function with the argument "John" and log the result to the console.
const greet = (name: string):string =>{
    return ` "Hello, ${name}"`
}
const greetMessage = greet("Adeeba");
console.log(greetMessage);


//## Arrow Function Return Value Question:

//Write a JavaScript Arrow function named `calculateArea` that takes two parameters: `length` and `width`, representing the length and width of a rectangle respectively. The Arrow function should calculate the area of the rectangle and return the result. 

//Provide an example of calling this Arrow function with values `5` for length and `3` for width, and then print the result.
let calculateArea = (length: number, width: number): number =>{
    return length*width
}
let result = calculateArea(5,3);
console.log(`The Area of rectangle is: `,result);


//## Default Parameter Arrow Function Question:

//Create a JavaScript Arrow function named `greet` that accepts two parameters: `name` and `greeting`. The Arrow function should return a greeting message using the provided `name` and `greeting`. If no `greeting` is provided, it should default to `"Hello"`. 

//For example:
//- When `greet("John", "Good morning")` is called, it should return `"Good morning, John!"`.
//- When `greet("Jane")` is called, it should return `"Hello, Jane!"`.
let greet1 = (name: string, greeting: string = "Hello"):string =>{
    return`${greeting}! ${name}...`
}
console.log(greet1('Adeeba','Good Morning'));
console.log(greet1('Jane'));


//## Rest Parameter in Arrow Function Question:

//Explain the concept of a rest parameter in typescript. write a typeScript Arrow function named `friend` that accepts any name of parameters and returns all name in array.

//For example:
//- If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].

const friend = (...names: string[]): string[]=>{
    return names
}
console.log(friend('ali','shahid','mariya','taha','ahmed'));


//## Spread Operator in Arrow Function:

//Explain the concept of a spread operator in typescript. write a typeScript Arrow function named `friend` that accepts any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. make sure your orignal array should not be change.

//For example:
//- If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].

const friend1 = (...names: string[]): string[] =>{
    // Return the original names array
    return names
};

// Example usage:
const originalNames = friend1('taha','Ahmed','Ali','shahid');
console.log(`Original Names: `,originalNames);

// To demonstrate that the original array is unchanged, we can create a modified copy
const modifiedNames = [...originalNames];
modifiedNames.pop();
console.log(`Modified Names: `,modifiedNames);




