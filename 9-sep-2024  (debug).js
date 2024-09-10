/* 1.Fix the issues in this code
calculateArea();
greetUser();
function calculateArea() {
 const radius = 5;
 let area;
 var area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
 console.log(userName);
 var userName = "John";
}
------------------------------------------------------------------------------
2. Why is this loop not stopping? How can you modify the code to ensure the loop counts down properly upto 100?
let count = 1;
while (count > 0) {
 console.log("Counting down: " + count);
 count = count + 1;
}
------------------------------------------------------------------------------
3. Why always `It's cold outside.` is printed irrespective of the temperature value. Fix this!
let temperature = 30;
if (temperature = 20) {
 console.log("It's cold outside.");
} else {
 console.log("It's warm outside.");
}
------------------------------------------------------------------------------
4. Fix the issues in the code so that output is printed correctly
checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num > 0);
    console.log("Negative");
  else if (num < 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}

------------------------------------------------------------------------------
 */






//1st
calculateArea();

function calculateArea() {
  let radius = 5;
  let area = Math.PI * radius * radius;
  console.log(area);
}

function greetUser() {
  let userName = "John";
  console.log(userName);
}
greetUser();

//2nd
let count = 1;
while (count <= 100) {
  console.log("Counting down: " + count);
  count = count + 1;
}

//3rd
let temperature = 30;
if (temperature == 20) {
  console.log("It's cold outside.");
} else {
  console.log("It's warm outside.");
}

//4th
checkNumber(-5);
checkNumber(0);
checkNumber(10);
function checkNumber(num) {
  if (num < 0) {
    console.log("Negative");
  } else if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}
