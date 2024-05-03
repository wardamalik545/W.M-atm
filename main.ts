#! usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 4321;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin)

{
   console.log("correct pin code !!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insufficient Balance");
    } else {
      myBalance -= amountAns.amount;

      console.log(`your remaining balance is ${myBalance}`);
    }
  } 
  else if (operationAns.operation === "check balance") {
    console.log(`Your Balance is ${myBalance}`);
  }

  else if (operationAns.operation === "fast cash")
     {
      let amount = await inquirer.prompt
      (
        {
            name: "fastCash",
            message: "Select your amount",
            type: "list",
            choices: ["500", "1000","2000", "5000", "10000"]
        }
     )
     if (amount.fastCash === "500")
      {
          myBalance -= amount.fastCash
          console.log(`You remaining balance is ${myBalance}`)

      }
  else if (amount.fastCash === "1000")
      {
          myBalance -= amount.fastCash
          console.log(`You remaining balance is ${myBalance}`)

      }
  else if (amount.fastCash === "2000")
      {
          myBalance -= amount.fastCash
          console.log(`You remaining balance is ${myBalance}`)

      }
  else if (amount.fastCash === "5000")
      {
          myBalance -= amount.fastCash
          console.log(`You remaining balance is ${myBalance}`)

      }
  else if (amount.fastCash === "10000")
      {
          myBalance -= amount.fastCash
          console.log(`You remaining balance is ${myBalance}`)

      }

 }
}
    
 else
  {
  console.log("incorrect pin number");
 }