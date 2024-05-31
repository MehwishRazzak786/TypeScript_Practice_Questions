//# make a Typescript file. convert this code into ternary statment
//## Task 1:
/*let temperature = 25;

if (temperature > 30) {
    console.log("It's too hot outside!");
} else {
    console.log("It's not too hot outside.");
}*/
console.log('task_1');
var temperature = 25;
// Using ternary operator
var temperatureMessage = temperature > 30 ? "It's too hot outside!" : "It's not too hot outside.";
console.log(temperatureMessage); // Output: It's not too hot outside.
//## Task 2:
/*let number = 7;

if (number > 30) {
    console.log("It's too high");
} else if (number > 20) {
    console.log("It's correct");
    }else {
    console.log("number is small");
}*/
console.log("task_2");
var number = 7;
// Using ternary operator
var numberMessage = number > 30 ? "It's too high" : number > 20 ? "It's correct" : "number is small";
console.log(numberMessage); // output: number is small
