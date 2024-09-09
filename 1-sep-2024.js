// 1st question
let principal = 10000;
let rate = 5;
let time = 3;
let si = (principal * rate * time) / 100;
console.log("Simple Interest : " + si);

// 2nd question
let radius = 14;
let area = 3.14159 * radius * radius;
console.log("Area of the circle : " + area);

// 3rd question

let Product_A = 150;
let Product_B = 200;
Product_A += Product_B;
Product_B = Product_A - Product_B;
Product_A = Product_A - Product_B;
console.log("Product A : " + Product_A);
console.log("Product B : " + Product_B);

// 4rd question
let num1 = 85;
let num2 = 90;
let num3 = 95;
let Average = (num1 + num2 + num3) / 3;
console.log("Average of three numbers : " + Average);

// 5rd question
let p = 5000;
let r = 6;
let rate_in_decimal=r/100;
let t = 4;
let n = 1;                 // no of times per year
let compound_interest= p * ((1 + (rate_in_decimal/n)) ** (n*t)) - p;   
console.log("Compound Interest: " + compound_interest);

// 6th  question
let CP = 800;
let SP = 950;
let Profit = SP - CP;
console.log("Profit : " + Profit);

// 7th question
let l = 50;
let w = 30;
let perimeter = 2 * (l + w);
console.log("total length of the fence : " + perimeter);

// 8th question
let x = 25;
let y = 19;
let result = x & y;
console.log("Bitwise AND : " + result);

// 9th question
let Celsius = 22;
let Fahrenheit = (Celsius * 9) / 5 + 32;
console.log("fahrenheit : " + Fahrenheit);

// 10th question
let radius_cylinder = 5;
let h = 10;
let Volume = 3.14159 * radius_cylinder * radius_cylinder * h;
console.log("Volume of cylinder : " + Volume);