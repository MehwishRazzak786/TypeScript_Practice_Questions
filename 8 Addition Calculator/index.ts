
import inquirer from 'inquirer';


//## Calculator

//- make addition calculator with the help of inquirer and 2 numbers.
const myNumber = await inquirer.prompt ([
    {
        type: 'number',
        name: 'number1',
        message: 'Enter your first number: '
    },
    {
        type: 'number',
        name: 'number2',
        message: 'Enter your second number: '
    }
]);
let addition = myNumber.number1 + myNumber.number2;
console.log(`Addition result is: `,addition);
