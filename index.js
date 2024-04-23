#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "pleas guess a number:",
    }]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
