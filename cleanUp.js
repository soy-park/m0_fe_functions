// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: 
// I changed the funtion name to "askName" for a more concise function name. I also included a
// semicolon at the end of the statement to follow function syntax. 
// I changed the function call to askName() and added a semicolon to the call for proper function syntax.
function askName() {
  console.log("Hello, what is your name?");
}

askName();


// EX 2:
// I indented statements in the code block, added a semicolon to the first statement, 
// and placed the end curly bracket to the left for better syntax. I also replaced console.log 
// with return for more flexibility in using the function. 
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));


// EX 3:
// I replaced func with the complete word, function, added a space between () and {}, and
// moved the end curly bracket to a single line at the bottom for better syntax and readability. 
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


//  EX 4:
// I changed the function name to "calculateAverage" for a more concise function name. 
// I moved the first curly bracket to the top line, indented the first statement of the code block,
// removed the line between statements, added a semicolon to the last statement, and moved 
// the end bracket to the left for better readability.
// I also called the function with arguments so the code runs.
function calculateAverage(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`);
}

calculateAverage(2, 4);
