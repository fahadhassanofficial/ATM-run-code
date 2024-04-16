#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "p1",
    message: "enter your pin",
    type: "number",
});
if (pinAnswer.p1 === myPin) {
    console.log("Correct pin code.");
    let operatorAns = await inquirer.prompt([
        {
            name: "operator",
            message: "Please select option.",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operatorAns.operator === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "please enter your amount",
                type: "number"
            }
        ]);
        if (amountAns?.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("your current balance is:" + myBalance);
        }
    }
    //add fast cash option
    else if (operatorAns.operator === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select the amount you withdraw",
                type: "list",
                choices: [1000, 2000, 3000, 5000, 10000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`you succesfuly withdrawl: ${fast.fastcash} \nYour remaining balance is ${myBalance}`);
    }
    else if (operatorAns.operator === "check balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pin code.");
}
