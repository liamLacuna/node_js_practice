const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
                          output: process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let anser = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }?`, 
(userInput) => {
    console.log(userInput);
})


