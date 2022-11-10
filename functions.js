// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
    console.log("Hello there!");
}

printGreeting();
printGreeting();
printGreeting();


// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function addSyrup(flavor) {
    console.log(`Please add ${flavor} syrup to my latte.`);
}

addSyrup("vanilla");


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function calculatePayRange(company, min, max) {
    var range = max - min;
    console.log(`${company} has a large pay range of ${range}.`);
}   

calculatePayRange("Starbucks", 20000, 180000);


// 4: Write a function that satifies the following interaction pattern:
function checkStock(num, food) {
    if (num === 0) {
        console.log(`${food} - OUT of stock!`)
    } else if (num <= 3) {
        console.log(`${food} - running LOW`)
    } else 
        console.log(`${food} is stocked`)
    }
    
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"