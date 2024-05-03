
// import inquirer from "inquirer"

// let ans = await inquirer.prompt({
    
// name : "age",
// type : "number",
// message : "Enter Your Age:"

// });

// console.log ("Insha ALLAH , in" + (60 - ans.age)+ "Years Old")




import inquirer from "inquirer";

let ans = await inquirer.prompt({
    // name : "fristNumber",
    name : "firstNum",
    type : "number",
    message : "enter your num"

})


let ans1 = await inquirer.prompt({
    name : "secondNum",
    type : "number",
    message : "enter your snum"

})

console.log ("your calcution is," + (ans.firstNum + ans1.secondNum))


