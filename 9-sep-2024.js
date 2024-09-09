// 1s questiont
function greet() {
  console.log("Hello, world!");
}
greet();

//2nd question
function getRandomNumber() {
  return Math.random();
}
let random = getRandomNumber();
console.log(random);

//3rd question
function displayGreeting(name) {
  console.log("hello " + name + " !");
}
displayGreeting("Gokul");

//4th question
function calculateSquare(num) {
  return num * num;
}

console.log(calculateSquare(5));

//5th question
function concatStrings(str1, str2) {
  return str1 + str2;
}
console.log(concatStrings("Krishna", "moorthy"));

//6th question
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isAdult(37));

//7th question
function addNumbers(num1, num2) {
  return num1 + num2;
}
let result = addNumbers(8, 7);
console.log(result);

//8th question
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(6));

//9th question
function compareNumbers(num1, num2) {
  if (num1 == num2) {
    console.log("The numbers are equal");
  } else if (num1 > num2) {
    console.log("The first number is greater");
  } else {
    console.log("The second number is greater");
  }
}
compareNumbers(5, 8);
